'use client';

import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initTelegram = async () => {
      // Initialize Telegram WebApp
      const tg = window.Telegram.WebApp;
      
      // Set viewport settings to prevent closing on scroll
      tg.expand();
      tg.enableClosingConfirmation();

      // Get user data
      const user = tg.initDataUnsafe.user;
      
      if (user) {
        try {
          // Check if user already exists
          const q = query(collection(db, "users"), where("id", "==", user.id));
          const querySnapshot = await getDocs(q);
          
          if (querySnapshot.empty) {
            // Save new user to Firebase
            await addDoc(collection(db, "users"), {
              id: user.id,
              username: user.username,
              timestamp: new Date()
            });
          }
        } catch (error) {
          console.error("Error saving user:", error);
        }
      }

      // Fetch all users
      fetchUsers();
    };

    if (typeof window !== 'undefined' && window.Telegram) {
      initTelegram();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = querySnapshot.docs.map(doc => doc.data());
      setUsers(usersData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Telegram Users</h1>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div 
            key={index} 
            className="p-4 border rounded-lg shadow-sm"
          >
            <p className="font-medium">Username: {user.username || 'N/A'}</p>
            <p className="text-gray-600">Chat ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}