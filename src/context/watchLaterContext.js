import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useVideoList } from './videoListContext';

const WatchLaterContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'GET_WATCHLATER':
    case 'ADD_TO_WATCHLATER':
      return [...action.payload];
    case 'REMOVE_FROM_WATCHLATER':
      return;
    default:
      return [...state];
  }
};

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, dispatchWatchLater] = useReducer(reducerFunc, []);

  // console.log(watchLikeList.watchLaterList, watchLikeList.likedList);
  return (
    <WatchLaterContext.Provider value={{ watchLaterList, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
