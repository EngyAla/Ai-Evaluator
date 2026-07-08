import React, { useState } from 'react';
import StudentRow from './StudentRow.jsx';
import SectionTitle from '../Typography/SectionTitle.jsx';
import './StudentTable.css';

const MOCK_STUDENTS = [
  { student: 'Reda', repository: 'github.com/Reda-Eladl/Week2-html', status: 'Waiting' },
  { student: 'Shahd', repository: 'github.com/shahd-askr/week-2', status: 'Waiting' },
  { student: 'Doaa', repository: 'github.com/doaahelhussein-ops/week2', status: 'Waiting' },
];

export default function StudentTable() {
  const [search, setSearch] = useState('');

  const filtered = MOCK_STUDENTS.filter((s) =>
    s.student.toLowerCase().includes(search.toLowerCase()) ||
    s.repository.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-table-section">
      <div className="student-table-header">
        <SectionTitle count={MOCK_STUDENTS.length}>Detected Students</SectionTitle>
        <div className="student-table-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="student-table-search-input"
          />
        </div>
      </div>

      <div className="student-table-wrap">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Repository</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <StudentRow key={s.student} {...s} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
