'use client';

import { useEffect, useState } from 'react';
import Telegram from '@telegram-apps/sdk';

export function useTelegramWebApp() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initTelegramSDK = async () => {
      try {
        // Initialize the Telegram SDK
        Telegram.init();

        if (!Telegram.WebApp.isReady) {
          await Telegram.WebApp.waitForReady(); // Wait until the WebApp is ready
        }

        // Retrieve user data
        const userData = Telegram.WebApp.initDataUnsafe?.user;

        if (!userData) {
          throw new Error('Failed to retrieve user data. Ensure your bot has proper permissions.');
        }

        setUser({
          id: userData.id,
          firstName: userData.first_name,
          lastName: userData.last_name,
          username: userData.username,
          languageCode: userData.language_code,
        });

        setIsReady(true);
      } catch (err) {
        setError(err);
        console.error('Error initializing Telegram WebApp:', err);
      }
    };

    initTelegramSDK();
  }, []);

  return { user, isReady, error };
}
