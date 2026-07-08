import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../Common/StatusBadge.jsx';
import './StudentRow.css';

export default function StudentRow({ student, repository, status }) {
  const navigate = useNavigate();

  return (
    <tr className="student-row" onClick={() => navigate(`/student/${encodeURIComponent(student)}`)}>
      <td className="student-row-name">{student}</td>
      <td className="student-row-repo">
        <div className="student-row-repo-inner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="student-row-github-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>{repository}</span>
        </div>
      </td>
      <td className="student-row-status">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
}
