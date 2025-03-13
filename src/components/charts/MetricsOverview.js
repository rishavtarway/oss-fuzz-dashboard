import React from 'react';

function MetricsOverview({ metrics }) {
  return (
    <div className="metrics-overview">
      <div className="metric-card">
        <h3>Total Benchmarks</h3>
        <p className="metric-value">{metrics.totalBenchmarks}</p>
      </div>
      <div className="metric-card">
        <h3>Successful Builds</h3>
        <p className="metric-value">{metrics.successfulBuilds}</p>
      </div>
      <div className="metric-card">
        <h3>Build Rate</h3>
        <p className="metric-value">{metrics.buildRate}%</p>
      </div>
      <div className="metric-card">
        <h3>Avg Coverage</h3>
        <p className="metric-value">{metrics.avgCoverage}%</p>
      </div>
      <div className="metric-card">
        <h3>Benchmarks with Crashes</h3>
        <p className="metric-value">{metrics.benchmarksWithCrashes}</p>
      </div>
      <div className="metric-card">
        <h3>Experiment Duration</h3>
        <p className="metric-value">{metrics.experimentDuration}</p>
      </div>
    </div>
  );
}

export default MetricsOverview;