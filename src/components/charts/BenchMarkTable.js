import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BenchmarkTable({ data }) {
  const [sortField, setSortField] = useState('benchmark');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="benchmark-table-container">
      <table className="benchmark-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('benchmark')}>
              Benchmark
              {sortField === 'benchmark' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('status')}>
              Status
              {sortField === 'status' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('buildRate')}>
              Build Rate
              {sortField === 'buildRate' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('crashRate')}>
              Crash Rate
              {sortField === 'crashRate' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('bugs')}>
              Bugs
              {sortField === 'bugs' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('coverage')}>
              Coverage
              {sortField === 'coverage' && (
                <span className="sort-arrow">{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((benchmark, index) => (
            <tr key={index} className={benchmark.status === 'Running' ? 'running' : ''}>
              <td>
                <Link to={`/benchmark/${benchmark.id}`}>
                  <div className="project-name">{benchmark.project}</div>
                  <div className="benchmark-signature">{benchmark.signature}</div>
                </Link>
              </td>
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
  );
}

export default BenchmarkTable;