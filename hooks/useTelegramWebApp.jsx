'use client';

import { useEffect, useState } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';

export function useTelegramWebApp() {
  const [initData, setInitData] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initTelegramWebApp = async () => {
      try {
        // Retrieve launch parameters including init data
        const { initDataRaw, initData } = retrieveLaunchParams();

        if (!initDataRaw || !initData) {
          throw new Error('Failed to retrieve initialization data');
        }

        // Store raw init data for API requests
        setInitData(initDataRaw);

        // Extract user data from init data
        if (initData.user) {
          setUser(initData.user);
        }

        // Additional context data
        const contextData = {
          chatType: initData.chat_type,
          chatInstance: initData.chat_instance,
          startParam: initData.start_param,
          authDate: new Date(initData.auth_date * 1000)
        };

        setIsReady(true);
      } catch (err) {
        setError(err);
        console.error('Error initializing Telegram WebApp:', err);
      }
    };

    initTelegramWebApp();
  }, []);

  // Helper function to make authenticated API requests
  const fetchWithAuth = async (url, options = {}) => {
    if (!initData) {
      throw new Error('Init data not available');
    }

    const headers = {
      ...options.headers,
      'Authorization': `tma ${initData}`
    };

    return fetch(url, { ...options, headers });
  };

  return { user, isReady, error, fetchWithAuth };
}