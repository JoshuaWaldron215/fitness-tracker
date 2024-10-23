import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ goal, progress }) => {
  const percentage = (progress / goal) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
      <span>{percentage.toFixed(2)}%</span>
    </div>
  );
};

export default ProgressBar;
