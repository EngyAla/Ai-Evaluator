import React from 'react';
import IssueRow from './IssueRow.jsx';
import './IssuesTable.css';

const MOCK_ISSUES = [
  { file: 'Task1.html', message: 'Semantic HTML Elements** The `<picture>` element is not used. The `<figure>` element is not used. The `<figcaption>` element is not used. The `<section>` element is not used. The `<ruby>` element is not used. The `<data>` element is not used.', snippet: null },
  { file: 'Task2.html', message: 'Semantic Page Layout** The header contains 4 navigation links, but at least five were expected. The sidebar\'s unordered list contains 4 categories, but five were expected.', snippet: null },
  { file: 'Task2.html', message: 'Audio Element** The `<source>` elements within the `<audio>` tag do not specify different audio formats.', snippet: '<source src="audio.mp3" type="audio/mpeg">\n<source src="audio.ogg" type="audio/ogg">\n<source src="audio.wav" type="audio/wav">' },
  { file: 'Task3.html', message: 'Video Element** A poster image is not specified for the `<video>` element (the `poster` attribute is empty). The `<video>` element does not contain two subtitle tracks.', snippet: null },
];

export default function IssuesTable({ issues = MOCK_ISSUES }) {
  return (
    <div className="issues-table">
      <div className="issues-table-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="issues-header-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 className="issues-title">Issues ({issues.length})</h3>
      </div>
      <div className="issues-list">
        {issues.map((issue, i) => (
          <IssueRow key={i} {...issue} />
        ))}
      </div>
    </div>
  );
}
