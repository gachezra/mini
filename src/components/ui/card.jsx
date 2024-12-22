// This file contains the Card component for the Vetracoin app.
// It is a reusable UI component for displaying content in a card layout.

import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
