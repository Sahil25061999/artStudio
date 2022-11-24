import React from 'react';
import { useFilter } from '../../context/context_index';
import './CategoryCard.css';

export const CategoryCard = ({ iconSrc, categoryName, setCategorySelect }) => {
  const { dispatchFilter } = useFilter();
  return (
    <div
      className="category-card-container"
      onClick={() =>
        dispatchFilter({ type: 'CATEGORY', payload: categoryName })
      }
    >
      <div className="card-head">
        <p className="video-card-heading ">
          {/* <span className={`fa-solid ${iconSrc} padding-r-10`}> </span> */}
          {categoryName}
        </p>
      </div>
    </div>
  );
};
