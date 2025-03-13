import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../../data/SampleData.js';

function BenchmarkDetail() {
  const { id } = useParams();
  const [benchmark, setBenchmark] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // In a real app, you'd fetch data by ID
    setLoading(true);
    const found = sampleData.benchmarks.find(b => b.id === id);
    
    setTimeout(() => {
      setBenchmark(found || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading benchmark data...</div>;
  }

  if (!benchmark) {
    return <div className="not-found">Benchmark not found</div>;
  }

  return (
    <div className="benchmark-detail">
      <div className="detail-header">
        <h1>{benchmark.project} - {benchmark.signature}</h1>
        <div className={`status-badge ${benchmark.status.toLowerCase()}`}>
          {benchmark.status}
        </div>
      </div>
      
      <div className="detail-tabs">
        <div 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </div>
        <div 
          className={`tab ${activeTab === 'crashes' ? 'active' : ''}`}
          onClick={() => setActiveTab('crashes')}
        >
          Crashes
        </div>
        <div 
          className={`tab ${activeTab === 'coverage' ? 'active' : ''}`}
          onClick={() => setActiveTab('coverage')}
        >
          Coverage
        </div>
        <div 
          className={`tab ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          Logs
        </div>
      </div>
      
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="detail-metrics">
              <div className="metric-card">
                <h3>Build Rate</h3>
                <p className="metric-value">{benchmark.buildRate}%</p>
              </div>
              <div className="metric-card">
                <h3>Crash Rate</h3>
                <p className="metric-value">{benchmark.crashRate}%</p>
              </div>
              <div className="metric-card">
                <h3>Bugs Found</h3>
                <p className="metric-value">{benchmark.bugs}</p>
              </div>
              <div className="metric-card">
                <h3>Coverage</h3>
                <p className="metric-value">{benchmark.coverage}%</p>
              </div>
            </div>
            
            <div className="benchmark-info">
              <h2>Benchmark Information</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Project:</td>
                    <td>{benchmark.project}</td>
                  </tr>
                  <tr>
                    <td>Signature:</td>
                    <td>{benchmark.signature}</td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td>{benchmark.status}</td>
                  </tr>
                  <tr>
                    <td>Duration:</td>
                    <td>{benchmark.duration}</td>
                  </tr>
                  <tr>
                    <td>Start Time:</td>
                    <td>{benchmark.startTime}</td>
                  </tr>
                  <tr>
                    <td>End Time:</td>
                    <td>{benchmark.endTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'crashes' && (
          <div className="crashes-tab">
            <h2>Crashes</h2>
            {benchmark.crashes && benchmark.crashes.length > 0 ? (
              <table className="crashes-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Stack Trace</th>
                    <th>Reproducible</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmark.crashes.map((crash, index) => (
                    <tr key={index}>
                      <td>{crash.id}</td>
                      <td>{crash.type}</td>
                      <td>{crash.location}</td>
                      <td>
                        <button className="view-trace-btn">View Trace</button>
                      </td>
                      <td>{crash.reproducible ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No crashes found for this benchmark.</p>
            )}
          </div>
        )}
        
        {activeTab === 'coverage' && (
          <div className="coverage-tab">
            <h2>Coverage Report</h2>
            <div className="coverage-metrics">
              <div className="metric-card">
                <h3>Line Coverage</h3>
                <p className="metric-value">{benchmark.coverage}%</p>
              </div>
              <div className="metric-card">
                <h3>Branch Coverage</h3>
                <p className="metric-value">{benchmark.branchCoverage || 'N/A'}</p>
              </div>
              <div className="metric-card">
                <h3>Function Coverage</h3>
                <p className="metric-value">{benchmark.functionCoverage || 'N/A'}</p>
              </div>
            </div>
            
            <div className="coverage-files">
              <h3>Covered Files</h3>
              {benchmark.coveredFiles ? (
                <table className="files-table">
                  <thead>
                    <tr>
                      <th>File</th>
                      <th>Line Coverage</th>
                      <th>Function Coverage</th>
                      <th>Branch Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmark.coveredFiles.map((file, index) => (
                      <tr key={index}>
                        <td>{file.name}</td>
                        <td>{file.lineCoverage}%</td>
                        <td>{file.functionCoverage}%</td>
                        <td>{file.branchCoverage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No coverage data available.</p>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'logs' && (
          <div className="logs-tab">
            <h2>Execution Logs</h2>
            <div className="log-controls">
              <select>
                <option>All logs</option>
                <option>Error logs</option>
                <option>Info logs</option>
                <option>Debug logs</option>
              </select>
              <button className="refresh-btn">Refresh</button>
            </div>
            <div className="log-container">
              <pre className="logs">
                {benchmark.logs || 'No logs available.'}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BenchmarkDetail;
