import React from 'react';
import PageContainer from '../components/Layout/PageContainer.jsx';
import RubricUpload from '../components/Upload/RubricUpload.jsx';
import CsvUpload from '../components/Upload/CsvUpload.jsx';
import Button from '../components/Common/Button.jsx';
import StudentTable from '../components/Students/StudentTable.jsx';
import ProgressList from '../components/Progress/ProgressList.jsx';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <PageContainer className="dashboard-page">
      <div className="dashboard-intro">
        <h1 className="dashboard-main-title">AI Assignment Evaluator</h1>
        <p className="dashboard-main-desc">
          Upload an evaluation rubric and a list of GitHub repositories to automatically evaluate student assignments using AI.
        </p>
      </div>

      <div className="dashboard-uploads">
        <RubricUpload />
        <CsvUpload />
      </div>

      <Button variant="primary" className="evaluate-all-btn">
        <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
          <path d="M8 5v14l11-7z" />
        </svg>
        Evaluate All
      </Button>

      <div className="dashboard-results-section">
        <StudentTable />
      </div>

      <div className="dashboard-progress-section">
        <ProgressList />
      </div>

      <div className="dashboard-footer-actions">
        <Button variant="secondary" className="export-excel-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Excel Report
        </Button>
      </div>
    </PageContainer>
  );
}
