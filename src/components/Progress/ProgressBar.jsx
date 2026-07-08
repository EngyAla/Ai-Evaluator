import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ percentage = 33, currentStudent = 'Shahd', elapsed = '01:42', remaining = '03:18' }) {
  return (
    <div className="progress-bar-section">
      <div className="progress-bar-row">
        <span className="progress-bar-label">Overall Progress</span>
        <span className="progress-bar-percent">{percentage}%</span>
      </div>

      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
      </div>

      <div className="progress-bar-meta">
        <div className="progress-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="progress-meta-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Current: <strong>{currentStudent}</strong></span>
        </div>
        <div className="progress-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="progress-meta-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Elapsed: <strong>{elapsed}</strong></span>
        </div>
        <div className="progress-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="progress-meta-icon">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Estimated Remaining: <strong>{remaining}</strong></span>
        </div>
      </div>
    </div>
  );
}
