import React from 'react';
import '../VideoCard/VideoCard.css';
import './CategoryCard.css';

export const CategoryCard = ({ imgSrc, categoryName }) => {
  return (
    <div
      className="card  category-card-container"
      style={{
        backgroundImage: ` url(${imgSrc}) `,
      }}
    >
      <div className="card-head">
        <h3 className="card-heading d-flex">{categoryName}</h3>
      </div>
    </div>
  );
};
