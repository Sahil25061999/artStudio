import React, { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();

const reducFunc = (state, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return { ...state, category: action.payload };
    case 'DATE':
      return { ...state, sort: { ...state.sort, date: true, alphabet: false } };
    case 'ALPHABET':
      return { ...state, sort: { ...state.sort, alphabet: true, date: false } };
    case 'ASCENDING':
      return {
        ...state,
        sort: { ...state.sort, ascending: true, descending: false },
      };
    case 'DESCENDING':
      return {
        ...state,
        sort: { ...state.sort, descending: true, ascending: false },
      };
    default:
      return { ...state };
  }
};

export const FilterProvider = ({ children }) => {
  const [filter, dispatchFilter] = useReducer(reducFunc, {
    category: 'all',
    sort: { date: true, ascending: true, alphabet: false, descending: false },
  });
  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {' '}
      {children}{' '}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
