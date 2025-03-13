import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ProjectSummaryChart({ data }) {
  return (
    <div className="project-summary-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="project" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalBenchmarks" fill="#8884d8" name="Total Benchmarks" />
          <Bar dataKey="successfulBenchmarks" fill="#82ca9d" name="Successful" />
          <Bar dataKey="newCoveredLines" fill="#ffc658" name="New Coverage" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProjectSummaryChart;