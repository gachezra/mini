// This file contains the Button component for the Vetracoin app.
// It is a reusable UI component for buttons.

import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
