import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import './LogWorkout.css';

const LogWorkout = () => {
  const { addWorkout } = useContext(WorkoutContext);

  const [workout, setWorkout] = useState({
    exercise: '',
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    setWorkout({
      exercise: '',
      sets: 0,
      reps: 0,
      weight: 0,
    });
  };

  return (
    <div className="log-workout">
      <h1>Log Your Workout</h1>
      <form onSubmit={handleSubmit}>
        <label>Exercise</label>
        <input type="text" name="exercise" value={workout.exercise} onChange={handleInputChange} placeholder="Exercise" />

        <label>Sets</label>
        <input type="number" name="sets" value={workout.sets} onChange={handleInputChange} placeholder="Sets" />

        <label>Reps</label>
        <input type="number" name="reps" value={workout.reps} onChange={handleInputChange} placeholder="Reps" />

        <label>Weight (kg)</label>
        <input type="number" name="weight" value={workout.weight} onChange={handleInputChange} placeholder="Weight (kg)" />

        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
};

export default LogWorkout;

