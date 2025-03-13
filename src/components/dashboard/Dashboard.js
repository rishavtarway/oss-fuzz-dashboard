// src/components/dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetricsOverview from '../charts/MetricsOverview.js';
import BenchmarkTable from '../charts/BenchMarkTable.js';
import ProjectSummaryChart from '../charts/ProjectSummaryChart.js';
import TestCaseDonut from '../charts/TestCaseDonut.js';
import RunTimeline from '../charts/RunTimeLine.js';
import sampleData from '../../data/SampleData.js';

function Dashboard() {
  const [data, setData] = useState(sampleData);
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState('7days');

  // In a real app, you'd fetch data here
  useEffect(() => {
    // Simulating data loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [timeRange]);

  const metrics = {
    totalBenchmarks: data.benchmarks.length,
    successfulBuilds: data.benchmarks.filter(b => b.status === 'Success').length,
    buildRate: (data.benchmarks.filter(b => b.status === 'Success').length / data.benchmarks.length * 100).toFixed(2),
    avgCoverage: data.averageCoverage,
    benchmarksWithCrashes: data.benchmarks.filter(b => b.crashRate > 0).length,
    experimentDuration: data.experimentDuration
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Fuzzing Test Results Dashboard</h1>
        <div className="time-selector">
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="24h">Last 24 hours</option>
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="loading">Loading dashboard data...</div>
      ) : (
        <>
          <MetricsOverview metrics={metrics} />
          
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h2>Test Case Results</h2>
              <TestCaseDonut data={data.testCaseResults} />
            </div>
            
            <div className="dashboard-card">
              <h2>Run Timeline</h2>
              <RunTimeline data={data.runTimeline} />
            </div>
            
            <div className="dashboard-card full-width">
              <h2>Benchmark Results</h2>
              <BenchmarkTable data={data.benchmarks} />
            </div>
            
            <div className="dashboard-card">
              <h2>Project Summary</h2>
              <ProjectSummaryChart data={data.projectSummary} />
            </div>
            
            <div className="dashboard-card">
              <h2>Coverage Gains</h2>
              <table className="coverage-table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Total Lines</th>
                    <th>Covered Lines</th>
                    <th>Coverage %</th>
                  </tr>
                </thead>
                <tbody>
                  {data.coverageGains.map((item, index) => (
                    <tr key={index}>
                      <td>{item.project}</td>
                      <td>{item.totalLines}</td>
                      <td>{item.coveredLines}</td>
                      <td>{item.coveragePercent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;