import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import './WorkoutHistory.css';

const WorkoutHistory = () => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  // Delete workout function
  const deleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <div className="workout-history">
      <h1>Workout History</h1>
      <div className="history-list">
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <div key={index} className="workout-card">
              <h3>{workout.exercise}</h3>
              <p><strong>Sets:</strong> {workout.sets}</p>
              <p><strong>Reps:</strong> {workout.reps}</p>
              <p><strong>Weight:</strong> {workout.weight} kg</p>
              <p><strong>Duration:</strong> {workout.duration} mins</p>
              <button className="delete-btn" onClick={() => deleteWorkout(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No workouts logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutHistory;
