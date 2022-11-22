import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  SingleVideoCard,
  VideoList,
  ShortVideoCard,
} from '../../components/components_index';
import { useVideoList } from '../../context/context_index';
import './SingleVideoPage.css';

export const SingleVideoPage = () => {
  const { videoInformation } = useVideoList();
  const location = useLocation();

  //   const video = { ...location.state };
  return (
    <div className="single-video-page-layout video-page app">
      <div className="main-video-container">
        <SingleVideoCard />
        {/* <div className="video-container"></div>
        <div className="video-info-container">
          <div className="video-creator-container">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-creator">{video.creator}</p>
          </div>
          <div className="video-action-container"></div>
        </div> */}
      </div>
      <div className="suggested-video-section">
        <h3>Suggested Videos</h3>
        <div className="suggested-video-container">
          <VideoList sectionTitle={''}>
            {videoInformation.map((item) => {
              return <ShortVideoCard key={item._id} video={item} />;
            })}
          </VideoList>
        </div>
      </div>
    </div>
  );
};
