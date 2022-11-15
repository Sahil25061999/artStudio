import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Carousel,
  VideoCard,
  CategoryCard,
  VideoList,
} from '../../components/components_index';
import {
  useCategory,
  useVideoList,
  useToken,
} from '../../context/context_index';
import './Homepage.css';
import { LoadingPage } from '../pages_index';

export const Homepage = () => {
  const categoryContainer = useRef(null);
  const { categoryData } = useCategory();
  const { videoInformation } = useVideoList();
  const { token, setToken } = useToken();

  const scrollOffset = 300;

  const handleHorizontalScroll = (scrollOffset) => {
    categoryContainer.current.scrollLeft += scrollOffset;
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.post('/api/auth/login', {
  //         email: 'adarshbalika@gmail.com',
  //         password: 'adarshBalika123',
  //       });

  //       localStorage.setItem('token', data.encodedToken);
  //     } catch (e) {
  //       console.error(e);
  //     }

  //      setToken(token)
  //   })();
  // }, []);

  return (
    <div className="homepage-main app">
      {/* <PlaylistModal /> */}
      {/* <SideNavbar /> */}
      <div className="carousel-main-container">
        <Carousel />
      </div>
      <div className="categories-section video-list-section">
        {/* <h2>Categories</h2> */}
        {/* <div className="btn-container">
          <button
            className="btn btn-float"
            onClick={() => handleHorizontalScroll(-scrollOffset)}
          >
            <span className="fas fa-angle-left categories-left-btn"></span>
          </button>
          <button
            className="btn btn-float"
            onClick={() => handleHorizontalScroll(scrollOffset)}
          >
            <span className="fas fa-angle-right categories-right-btn"></span>
          </button>
        </div>
        <div className="linear-gradient-container">
          <div className="left-gradient"></div>
          <div className="right-gradient"></div>
        </div> */}

        <div className="categories-container" ref={categoryContainer}>
          {categoryData.map(({ _id: id, iconSrc, categoryName }) => {
            return (
              <CategoryCard
                key={id}
                iconSrc={iconSrc}
                categoryName={categoryName}
              />
            );
          })}
        </div>
      </div>
      <VideoList sectionTitle={'TrendingVideos'}>
        {videoInformation.map((item) => {
          return <VideoCard key={item._id} video={item} />;
        })}
      </VideoList>
    </div>
  );
};
