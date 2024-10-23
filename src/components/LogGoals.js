import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';  // Import the WorkoutContext

const LogGoals = () => {
  const { addGoal } = useContext(WorkoutContext);  // Destructure addGoal from the context

  const [goal, setGoal] = useState('');
  const [type, setType] = useState('monthly');  // Default goal type is 'monthly'

  const handleInputChange = (e) => {
    setGoal(e.target.value);
  };

  const handleSelectChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use addGoal from context
    addGoal(goal, type);

    // Clear the form after submission
    setGoal('');
    setType('monthly');
  };

  return (
    <div className="log-goals">
      <h1>Log Your Fitness Goals</h1>
      <form onSubmit={handleSubmit}>
        <select value={type} onChange={handleSelectChange}>
        <option value="weekly">Weekly Goal</option>
          <option value="monthly">Monthly Goal</option>
          <option value="yearly">Yearly Goal</option>
        </select>
        <input 
          type="text" 
          value={goal} 
          onChange={handleInputChange} 
          placeholder="Enter your goal" 
        />
        <button type="submit">Goals</button>
      </form>
    </div>
  );
};

export default LogGoals;

