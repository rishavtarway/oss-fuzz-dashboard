// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar.js';
import Dashboard from './components/dashboard/Dashboard.js';
import BenchmarkDetail from './components/dashboard/BenchMarkDetail.js';
import ProjectSummary from './components/dashboard/ProjectSummary.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/benchmark/:id" element={<BenchmarkDetail />} />
            <Route path="/project/:id" element={<ProjectSummary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;