// This file contains the LeaderboardCard component for the Vetracoin app.
// It is used to display user information in the Leaderboard section.

import React from 'react';

const LeaderboardCard = ({ user }) => {
  return (
    <div className="leaderboard-card">
      <h3>{user.name}</h3>
      <p>Vetrocoins: {user.coins}</p>
      <p>Rank: {user.rank}</p>
    </div>
  );
};

export default LeaderboardCard;
