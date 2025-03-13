// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <img src="https://avatars.githubusercontent.com/u/1342004?s=48&v=4" alt="Fuzzing Dashboard" />
          <h1>oss-fuzz-gen Dashboard</h1>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">
              <span className="icon">📊</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={isActive('/benchmarks') ? 'active' : ''}>
            <Link to="/benchmarks">
              <span className="icon">🧪</span>
              <span>Benchmarks</span>
            </Link>
          </li>
          <li className={isActive('/projects') ? 'active' : ''}>
            <Link to="/projects">
              <span className="icon">📁</span>
              <span>Projects</span>
            </Link>
          </li>
          <li className={isActive('/bugs') ? 'active' : ''}>
            <Link to="/bugs">
              <span className="icon">🐛</span>
              <span>Bugs</span>
            </Link>
          </li>
          <li className={isActive('/coverage') ? 'active' : ''}>
            <Link to="/coverage">
              <span className="icon">📈</span>
              <span>Coverage</span>
            </Link>
          </li>
          <li className={isActive('/settings') ? 'active' : ''}>
            <Link to="/settings">
              <span className="icon">⚙️</span>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="version">v1.0.0</div>
      </div>
    </div>
  );
}

export default Sidebar;