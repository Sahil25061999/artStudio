import React from 'react';
import './VideoList.css';

export const VideoList = ({ sectionTitle, children }) => {
  return (
    <div className="video-list-section">
      <h2>{sectionTitle}</h2>
      <div className="list-container">{children}</div>
    </div>
  );
};
