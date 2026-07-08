import React from 'react';
import UploadCard from './UploadCard.jsx';

const MOCK_FILE = { name: 'students.csv', size: '12.4 KB', rows: 3 };

const CsvIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M14 3v18M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);

export default function CsvUpload() {
  return (
    <UploadCard
      title="Students List"
      description="Upload a CSV file containing student names and repository URLs."
      icon={<CsvIcon />}
      accept=".csv"
      uploadedFile={MOCK_FILE}
    />
  );
}
