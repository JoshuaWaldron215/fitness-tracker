import React, { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const { workouts, goals, deleteWorkout, deleteGoal } = useContext(WorkoutContext);
  const [timeFilter, setTimeFilter] = useState('weekly');
  const [chartData, setChartData] = useState([]);

  // Calculate total weight lifted per workout
  useEffect(() => {
    const data = workouts.map((workout, index) => ({
      name: `Workout ${index + 1}`,
      weight: workout.sets * workout.reps * workout.weight,
    }));
    setChartData(data);
  }, [workouts]);

  return (
    <div className="dashboard">
      <h1>Fitness Dashboard</h1>

      {/* Goals Section */}
      <div className="goal-section">
        <h2>Goals</h2>
        <div className="goals-container">
          <div className="goal-block">
            <h3>Weekly Goals</h3>
            <ul>
              {goals.weekly.map((goal, index) => (
                <li key={index}>
                  {goal}
                  <button className="delete-btn" onClick={() => deleteGoal('weekly', index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="goal-block">
            <h3>Monthly Goals</h3>
            <ul>
              {goals.monthly.map((goal, index) => (
                <li key={index}>
                  {goal}
                  <button className="delete-btn" onClick={() => deleteGoal('monthly', index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <label>View Total Weight for: </label>
        <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h2>Total Weight Lifted ({timeFilter})</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="weight" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Workout History */}
      <div className="workout-history">
        <h2>Workout History</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              <strong>{workout.exercise}</strong> - {workout.sets} sets, {workout.reps} reps, {workout.weight} kg
              <button className="delete-btn" onClick={() => deleteWorkout(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;







