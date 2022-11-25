import { useEffect, useState } from 'react';
import { useFilter } from '../../context/context_index';
import './SortBy.css';

export const SortBy = () => {
  const [displayList, setDisplayList] = useState(false);
  const { filter, dispatchFilter } = useFilter();
  const toggleClass = () => {
    setDisplayList(!displayList);
  };

  const handleSort = (e) => {
    dispatchFilter({ type: e.target.value });
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
          <li className="sort-list-items">
            <input
              type="radio"
              name="sortBy"
              id="date"
              value="DATE"
              defaultChecked="true"
              onChange={(e) => handleSort(e)}
            />
            <label htmlFor="date">Date</label>
          </li>
          <li className="sort-list-items">
            <input
              type="radio"
              name="sortBy"
              id="alphabet"
              value="ALPHABET"
              onChange={(e) => handleSort(e)}
            />
            <label htmlFor="alphabet">Alphabet</label>
          </li>
          <li className="horizontal-line"></li>

          <li className="sort-list-items">
            <input
              type="radio"
              name="orderBy"
              id="ascending"
              value="ASCENDING"
              onChange={(e) => handleSort(e)}
              defaultChecked="true"
            />
            <label htmlFor="ascending">Ascending</label>{' '}
          </li>
          <li className="sort-list-items">
            <input
              type="radio"
              name="orderBy"
              id="descending"
              value="DESCENDING"
              onChange={(e) => handleSort(e)}
            />
            <label htmlFor="descending">Descending</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
