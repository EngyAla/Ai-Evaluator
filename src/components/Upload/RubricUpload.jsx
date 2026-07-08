import React from 'react';
import UploadCard from './UploadCard.jsx';

const MOCK_FILE = { name: 'beginner-week4.md', size: '24.6 KB' };

const RubricIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function RubricUpload() {
  return (
    <UploadCard
      title="Evaluation Rubric"
      description="Upload the task markdown rubric used for students evaluation."
      icon={<RubricIcon />}
      accept=".md"
      uploadedFile={MOCK_FILE}
    />
  );
}
