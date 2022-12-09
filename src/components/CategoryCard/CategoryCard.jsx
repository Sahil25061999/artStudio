import React, { useEffect, useState } from 'react';
import { useFilter } from '../../context/context_index';
import './CategoryCard.css';

export const CategoryCard = ({ categoryName, id }) => {
  // const [active, setActive] = useState(false);
  const {
    filter: { category: activeCategory },
    dispatchFilter,
  } = useFilter();

  return (
    <div
      className={`category-card-container ${
        activeCategory === categoryName ? 'category-selected' : ''
      }`}
      onClick={() => {
        dispatchFilter({ type: 'CATEGORY', payload: categoryName });
      }}
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
