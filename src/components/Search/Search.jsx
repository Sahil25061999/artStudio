import React from 'react';
import './Search.css';

export const Search = () => {
  return (
    <div className="horizontal-search-container d-flex">
      <input className="textbox" type="text" />
      <button className="btn btn-only-icon btn-square search-btn">
        <span className="fa-solid fa-magnifying-glass"></span>
      </button>
    </div>
  );
};
