// This file contains the Navigation component for the Vetracoin app.
// It is a shared component used to display the app's navigation menu.

import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/earn/ads">Watch Ads</a></li>
        <li><a href="/earn/tasks">Complete Tasks</a></li>
        <li><a href="/earn/referrals">Referral System</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
