import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import ProgressItem from './ProgressItem.jsx';
import SectionTitle from '../Typography/SectionTitle.jsx';
import './ProgressList.css';

const MOCK_STUDENTS = [
  { student: 'Reda', status: 'Completed', percentage: 100, score: 96, duration: '00:58' },
  { student: 'Shahd', status: 'Reading Files', percentage: 62, elapsed: '01:42' },
  { student: 'Doaa', status: 'Waiting', percentage: 0 },
];

export default function ProgressList() {
  return (
    <div className="progress-list-section">
      <SectionTitle>Evaluation Progress</SectionTitle>
      <ProgressBar percentage={33} currentStudent="Shahd" elapsed="01:42" remaining="03:18" />
      <div className="progress-list-items">
        {MOCK_STUDENTS.map((s) => (
          <ProgressItem key={s.student} {...s} />
        ))}
      </div>
    </div>
  );
}
