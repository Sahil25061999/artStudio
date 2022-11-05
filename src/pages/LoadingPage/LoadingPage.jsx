import React from 'react';
import { CategoryCard } from '../../components/components_index';
import '../Homepage/Homepage.css';
export const LoadingPage = () => {
  return (
    <div className="homepage-main">
      <div className="carousel-main-container"></div>
      <div className="categories-section video-list-section">
        <h2>Categories</h2>
        <div className="btn-container">
          <button className="btn btn-float">
            <span className="fas fa-angle-left categories-left-btn"></span>
          </button>
          <button className="btn btn-float">
            <span className="fas fa-angle-right categories-right-btn"></span>
          </button>
        </div>
        <div className="linear-gradient-container">
          <div className="left-gradient"></div>
          <div className="right-gradient"></div>
        </div>

        <div className="categories-container video-list-container">
          {Array(5).map((item) => {
            return <CategoryCard />;
          })}
        </div>
      </div>
      <div className="trending-section video-list-section">
        <h2>Trending Videos</h2>
        <div className="trending-video-container video-list-container">
          {/* {videoInformation.map((item) => {
            return <VideoCard key={item._id} video={item} />;
          })} */}
        </div>
      </div>
    </div>
  );
};
