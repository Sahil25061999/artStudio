import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useVideoList } from './videoListContext';

const WatchLikeListContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'WATCH_LATER':
      return { ...state, watchLater: [...action.payload] };
    case 'LIKED_VIDEOS':
      return { ...state, likedList: [...action.payload] };
    case 'PLAYLIST':
      return { ...state, playlist: [...action.payload] };
    default:
      return { ...state };
  }
};

export const WatchLikeListProvider = ({ children }) => {
  const [watchLikeList, watchLikeListDispatch] = useReducer(reducerFunc, {
    watchLater: [],
    likedList: [],
    playlist: [],
  });

  // console.log(watchLikeList.watchLater, watchLikeList.likedList);
  return (
    <WatchLikeListContext.Provider
      value={{ watchLikeList, watchLikeListDispatch }}
    >
      {children}
    </WatchLikeListContext.Provider>
  );
};

export const useWatchLikeList = () => useContext(WatchLikeListContext);
