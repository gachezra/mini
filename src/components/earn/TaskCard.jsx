// This file contains the TaskCard component for the Vetracoin app.
// It is used to display tasks in the Complete Tasks section.

import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
