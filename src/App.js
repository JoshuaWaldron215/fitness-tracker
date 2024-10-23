import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogWorkout from './components/LogWorkout';
import LogGoals from './components/LogGoals';
import NavBar from './components/NavBar';
import { WorkoutProvider } from './context/WorkoutContext';
import './App.css';  // Import main CSS

const App = () => {
  return (
    <WorkoutProvider>
      <Router>
        <div className="app-layout">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/log-workout" element={<LogWorkout />} />
              <Route path="/log-goals" element={<LogGoals />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WorkoutProvider>
  );
};

export default App;







