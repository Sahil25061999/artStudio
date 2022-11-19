import React from 'react';
import './CategoryCard.css';

export const CategoryCard = ({ iconSrc, categoryName }) => {
  return (
    <div className="category-card-container">
      <div className="card-head">
        <p className="video-card-heading ">
          {/* <span className={`fa-solid ${iconSrc} padding-r-10`}> </span> */}
          {categoryName}
        </p>
      </div>
    </div>
  );
};
