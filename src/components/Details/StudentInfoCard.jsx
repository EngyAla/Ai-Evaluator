import React from 'react';
import ScoreBadge from '../Common/ScoreBadge.jsx';
import StatusBadge from '../Common/StatusBadge.jsx';
import './StudentInfoCard.css';

export default function StudentInfoCard({ student = 'Reda', repository = 'github.com/Reda-Eladl/Week2-html', score = 96, maxScore = 100, status = 'Passed', startedAt = 'May 24, 2025 10:31 AM', finishedAt = 'May 24, 2025 10:32 AM', duration = '00:58', totalIssues = 12 }) {
  const initial = student ? student.charAt(0).toUpperCase() : '?';

  return (
    <div className="student-info-card">
      <div className="student-info-top">
        <div className="student-info-identity">
          <div className="student-avatar">{initial}</div>
          <div className="student-info-text">
            <h2 className="student-info-name">{student}</h2>
            <a href={`https://${repository}`} target="_blank" rel="noopener noreferrer" className="student-info-repo">
              {repository}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <div className="student-info-score-block">
          <span className="student-info-score-label">Overall Score</span>
          <ScoreBadge score={score} maxScore={maxScore} size="large" />
          <StatusBadge status={status} />
        </div>
      </div>

      <div className="student-info-meta">
        <div className="meta-block">
          <span className="meta-label">Started At</span>
          <span className="meta-value">{startedAt}</span>
        </div>
        <div className="meta-block">
          <span className="meta-label">Finished At</span>
          <span className="meta-value">{finishedAt}</span>
        </div>
        <div className="meta-block">
          <span className="meta-label">Duration</span>
          <span className="meta-value">{duration}</span>
        </div>
        <div className="meta-block">
          <span className="meta-label">Total Issues</span>
          <span className="meta-value">{totalIssues}</span>
        </div>
      </div>
    </div>
  );
}
