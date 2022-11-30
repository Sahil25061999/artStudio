import React, { useRef, useEffect } from 'react';
import {
  Carousel,
  VideoCard,
  CategoryCard,
  VideoList,
} from '../../components/components_index';
import {
  useCategory,
  useVideoList,
  useFilter,
} from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getSelectedCategoryList } from '../../utils/utils_index';
import './Homepage.css';

export const Homepage = () => {
  const categoryContainer = useRef(null);

  const {
    filter: { category },
  } = useFilter();
  const { categoryData } = useCategory();
  const { videoInformation } = useVideoList();

  useDocumentTitle('ArtStudio');

  const scrollOffset = 250;

  const handleHorizontalScroll = (scrollOffset) => {
    categoryContainer.current.scrollLeft += scrollOffset;
  };

  const filteredList = getSelectedCategoryList(videoInformation, category);

  return (
    <div className="homepage-main app">
      <div className="carousel-main-container">
        <Carousel />
      </div>

      <h2>Explore Now</h2>

      <div className="categories-section video-list-section">
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

      <VideoList sectionTitle={''}>
        {filteredList.map((item) => {
          return <VideoCard key={item._id} video={item} />;
        })}
      </VideoList>
    </div>
  );
};
