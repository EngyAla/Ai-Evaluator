import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../components/Layout/PageContainer.jsx';
import StudentInfoCard from '../components/Details/StudentInfoCard.jsx';
import SummaryCard from '../components/Details/SummaryCard.jsx';
import IssuesTable from '../components/Details/IssuesTable.jsx';
import BackButton from '../components/Details/BackButton.jsx';
import Button from '../components/Common/Button.jsx';
import './StudentDetails.css';

export default function StudentDetails() {
  const { studentId } = useParams();

  // Decoded student name for rendering
  const studentName = studentId ? decodeURIComponent(studentId) : 'Student';

  return (
    <PageContainer className="student-details-page">
      <div className="student-details-header">
        <h1 className="student-details-title">Student Evaluation Details</h1>
        <BackButton />
      </div>

      <div className="student-details-content-scroll">
        <StudentInfoCard student={studentName} />
        <SummaryCard />
        <IssuesTable />

        <div className="student-details-actions">
          <Button variant="secondary" className="download-report-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Report
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
