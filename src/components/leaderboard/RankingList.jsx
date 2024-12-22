// This file contains the RankingList component for the Vetracoin app.
// It is used to display the list of users and their rankings in the Leaderboard section.

import React from 'react';

const RankingList = ({ users }) => {
  return (
    <div className="ranking-list">
      <h2>Ranking List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.coins} Vetrocoins (Rank: {user.rank})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingList;
