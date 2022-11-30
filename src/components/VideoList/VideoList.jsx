import React, { useEffect, useRef } from 'react';
import './VideoList.css';

export const VideoList = ({ children, categorySelected }) => {
  const videoListContainer = useRef(null);
  useEffect(() => {
    console.log(videoListContainer.current);
    videoListContainer.current.scrollTop = 530;
  }, [categorySelected]);
  return (
    <div className="video-list-section">
      <div className="list-container" ref={videoListContainer}>
        {children}
      </div>
    </div>
  );
};
