import React from 'react';
import './StatusBadge.css';

export default function StatusBadge({ status }) {
  if (!status) return null;
  const normalizedStatus = status.toLowerCase();
  
  let variant = 'info';
  if (normalizedStatus === 'passed' || normalizedStatus === 'completed') {
    variant = 'success';
  } else if (normalizedStatus === 'failed' || normalizedStatus === 'error') {
    variant = 'error';
  } else if (normalizedStatus === 'waiting' || normalizedStatus === 'reading files' || normalizedStatus === 'reading') {
    variant = 'warning';
  }

  return (
    <span className={`status-badge status-${variant}`}>
      {status}
    </span>
  );
}
