import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFilter } from '../../context/context_index';
import './Search.css';

export const Search = () => {
  // const [displaySearch, setDisplaySearch] = useState();

  const [searchText, setSearchText] = useState('');
  const [searhParams, setSearchParams] = useState();
  const { dispatchFilter } = useFilter();
  // const searchQuery = searhParams.get('searchQuery');

  const navigate = useNavigate();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="horizontal-search-container d-flex">
      <div tabIndex="1" className="search-box-container">
        <input className="textbox" type="text" onChange={handleSearchText} />
      </div>

      <button
        onClick={() => {
          dispatchFilter({ type: 'SEARCH', payload: searchText.toLowerCase() });
          navigate(`/search/${searchText}`);
        }}
        className="btn btn-only-icon btn-square search-btn"
      >
        <span className="fa-solid fa-magnifying-glass"></span>
      </button>
    </div>
  );
};
