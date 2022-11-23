import { useState } from 'react';
import './SortBy.css';

export const SortBy = () => {
  const [displayList, setDisplayList] = useState(false);
  const toggleClass = () => {
    setDisplayList(!displayList);
  };
  return (
    <div className="sort-by-section">
      <div className="sort-by-container">
        <button className="btn btn-sort " onClick={() => toggleClass()}>
          <span className="fa-solid fa-sort padding-r-5"></span>
          Sort By
        </button>
      </div>
      <div className="sort-by-values">
        <ul
          className={` sort-by-values-list list-style-none ${
            displayList ? 'display-list' : ''
          }`}
        >
          <li className="sort-list-items">Date</li>
          <li className="sort-list-items">Alphabet</li>
        </ul>
      </div>
    </div>
  );
};
