import React from 'react';
import Spinner from '../Common/Spinner.jsx';
import './ProgressItem.css';

export default function ProgressItem({ student, status, percentage = 0, score, duration, elapsed }) {
  const isCompleted = status === 'Completed';
  const isReading = status === 'Reading Files';
  const isWaiting = status === 'Waiting';

  return (
    <div className="progress-item">
      <div className="progress-item-left">
        <span className="progress-item-name">{student}</span>
        {isCompleted && <span className="progress-item-status status-completed">Completed</span>}
        {isReading && <span className="progress-item-status status-reading">Reading Files</span>}
        {isWaiting && <span className="progress-item-status status-waiting">Waiting</span>}
      </div>

      <div className="progress-item-bar-wrap">
        <div className="progress-item-track">
          <div className="progress-item-fill" style={{ width: `${percentage}%`, backgroundColor: isCompleted ? 'var(--primary-color)' : isReading ? 'var(--info-color)' : 'var(--border-color)' }} />
        </div>
        <span className="progress-item-pct">{percentage}%</span>
      </div>

      <div className="progress-item-right">
        {isCompleted && score !== undefined && (
          <>
            <span className="progress-item-score">Score: <strong>{score}</strong></span>
            <span className="progress-item-duration">Duration: {duration}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" strokeWidth="2" className="progress-item-check">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </>
        )}
        {isReading && (
          <>
            <span className="progress-item-elapsed">Elapsed: {elapsed}</span>
            <Spinner size="small" />
          </>
        )}
        {isWaiting && <span className="progress-item-dash">— —</span>}
      </div>
    </div>
  );
}
