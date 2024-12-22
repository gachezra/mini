// This file contains the Dialog component for the Vetracoin app.
// It is a reusable UI component for displaying modal dialogs.

import React from 'react';

const Dialog = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <div className="dialog-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
