import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useVideoList } from './videoListContext';

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState([]);

  return (
    <WatchLaterContext.Provider value={{ watchLaterList, setWatchLaterList }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
