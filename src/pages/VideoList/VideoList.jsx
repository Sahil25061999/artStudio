import React from 'react';

import { VideoCard } from '../../components/components_index';
import './VideoList.css';
import { useVideoList } from '../../context/context_index';

export const VideoList = () => {
  const { videoInformation } = useVideoList();
  return (
    <div className="video-page app">
      <div className="video-list-section">
        <h2>Trending Videos</h2>
        <div className="list-container ">
          {videoInformation.map((item) => {
            return <VideoCard video={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
