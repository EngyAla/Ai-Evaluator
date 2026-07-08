import React from 'react';
import Button from '../Common/Button.jsx';
import './UploadCard.css';

export default function UploadCard({ title, description, icon, accept, uploadedFile }) {
  return (
    <div className="upload-card">
      <div className="upload-card-header">
        <div className="upload-card-icon">
          {icon}
        </div>
        <div>
          <h3 className="upload-card-title">{title}</h3>
          <p className="upload-card-desc">{description}</p>
        </div>
      </div>

      <div className="upload-dropzone">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="upload-dropzone-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-3 3m3-3l3 3M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="upload-dropzone-text">
          Drag &amp; drop your {accept} file here<br />
          <span className="upload-dropzone-or">or</span>
        </p>
        <Button variant="primary" className="upload-browse-btn">Browse File</Button>
      </div>

      {uploadedFile && (
        <div className="upload-file-info">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="upload-file-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <div className="upload-file-details">
            <span className="upload-file-name">{uploadedFile.name}</span>
            <span className="upload-file-size">{uploadedFile.size}</span>
            {uploadedFile.rows && <span className="upload-file-rows">• {uploadedFile.rows} rows detected</span>}
          </div>
          <span className="upload-file-check">✓</span>
        </div>
      )}
    </div>
  );
}
