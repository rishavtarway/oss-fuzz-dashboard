import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RunTimeline({ data }) {
  return (
    <div className="timeline-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pass" stroke="#4CAF50" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fail" stroke="#F44336" />
          <Line type="monotone" dataKey="error" stroke="#FFC107" />
          <Line type="monotone" dataKey="cancelled" stroke="#9E9E9E" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RunTimeline;
