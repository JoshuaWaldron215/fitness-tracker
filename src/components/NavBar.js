import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaDumbbell, FaTasks, FaChartLine } from 'react-icons/fa';  // Import icons
import './NavBar.css';  // Import the updated CSS

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);  // State to track sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Toggle the sidebar open/close
  };

  return (
    <div>
      {/* Hamburger Icon to Toggle the Sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {isOpen && <h1>Track your Fitness </h1>}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FaChartLine className="icon" />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/log-workout">
              <FaDumbbell className="icon" />
              {isOpen && <span>Log Workout</span>}
            </Link>
          </li>
          <li>
            <Link to="/log-goals">
              <FaTasks className="icon" />
              {isOpen && <span>Log Goal</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;


