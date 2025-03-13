import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import sampleData from '../../data/SampleData.js';

function ProjectSummary() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you'd fetch project data by ID
    setLoading(true);
    const found = sampleData.projectSummary.find(p => p.project === id);
    
    setTimeout(() => {
      setProject(found || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading project data...</div>;
  }

  if (!project) {
    return <div className="not-found">Project not found</div>;
  }

  // Filter benchmarks for this project
  const projectBenchmarks = sampleData.benchmarks.filter(b => b.project === project.project);
  
  // Create data for coverage trend
  const coverageTrendData = [
    { name: 'Initial', coverage: project.initialCoverage || 0 },
    { name: 'Current', coverage: project.initialCoverage + project.coverageGain || 0 }
  ];

  return (
    <div className="project-summary">
      <div className="detail-header">
        <h1>Project: {project.project}</h1>
      </div>
      
      <div className="project-metrics">
        <div className="metric-card">
          <h3>Total Benchmarks</h3>
          <p className="metric-value">{project.totalBenchmarks}</p>
        </div>
        <div className="metric-card">
          <h3>Successful Benchmarks</h3>
          <p className="metric-value">{project.successfulBenchmarks}</p>
        </div>
        <div className="metric-card">
          <h3>Coverage Gain</h3>
          <p className="metric-value">{project.coverageGain}%</p>
        </div>
        <div className="metric-card">
          <h3>New Covered Lines</h3>
          <p className="metric-value">{project.newCoveredLines}</p>
        </div>
        <div className="metric-card">
          <h3>Total Project Lines</h3>
          <p className="metric-value">{project.totalProjectLines}</p>
        </div>
      </div>
      
      <div className="project-charts">
        <div className="chart-card">
          <h2>Coverage Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={coverageTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="coverage" fill="#8884d8" name="Coverage %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="project-benchmarks">
        <h2>Project Benchmarks</h2>
        <table className="benchmarks-table">
          <thead>
            <tr>
              <th>Benchmark</th>
              <th>Status</th>
              <th>Build Rate</th>
              <th>Crash Rate</th>
              <th>Bugs</th>
              <th>Coverage</th>
            </tr>
          </thead>
          <tbody>
            {projectBenchmarks.map((benchmark, index) => (
              <tr key={index}>
                <td>{benchmark.signature}</td>
                <td>
                  <span className={`status-badge ${benchmark.status.toLowerCase()}`}>
                    {benchmark.status}
                  </span>
                </td>
                <td>{benchmark.buildRate}%</td>
                <td>{benchmark.crashRate}%</td>
                <td>{benchmark.bugs}</td>
                <td>{benchmark.coverage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectSummary;