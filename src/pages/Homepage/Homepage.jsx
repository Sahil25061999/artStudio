import React, { useEffect } from 'react';
import {
  Carousel,
  VideoCard,
  CategoryCard,
  VideoList,
  Snackbar,
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
  const {
    filter: { category },
  } = useFilter();
  const { categoryData } = useCategory();
  const { videoInformation } = useVideoList();

  useDocumentTitle('ArtStudio');

  const filteredList = getSelectedCategoryList(videoInformation, category);

  return (
    <div className="homepage-main app">
      <div className="carousel-main-container">
        <Carousel />
      </div>

      <h2>Explore Now</h2>

      <div className="categories-section video-list-section">
        <div className="categories-container">
          {categoryData.map(({ _id: id, categoryName }) => {
            return (
              <CategoryCard key={id} id={id} categoryName={categoryName} />
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
