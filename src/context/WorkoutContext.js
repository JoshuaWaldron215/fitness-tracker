import React, { createContext, useState } from 'react';

// Create the context
export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState({
    monthly: ['Lift 500 kg total'],
    weekly: ['Lift 200 kg total'],
  });

  const addWorkout = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  const deleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  const addGoal = (goal, type) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [type]: [...prevGoals[type], goal],
    }));
  };

  const deleteGoal = (type, index) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [type]: prevGoals[type].filter((_, i) => i !== index),
    }));
  };

  return (
    <WorkoutContext.Provider value={{ workouts, goals, addWorkout, addGoal, deleteWorkout, deleteGoal }}>
      {children}
    </WorkoutContext.Provider>
  );
};
