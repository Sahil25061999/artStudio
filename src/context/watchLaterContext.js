import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import axios from 'axios';
import { useVideoList } from './videoListContext';
import { getToken } from '../utils/utils_index';

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const token = getToken();

  axios.defaults.headers.common['authorization'] = token;

  const addToWatchLaterBtn = async (video) => {
    try {
      const watchLaterResp = await axios.post('/api/user/watchlater', {
        video,
      });
      setWatchLaterList(() => watchLaterResp.data.watchlater);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromWatchLaterBtn = async (video) => {
    try {
      const removeWatchLaterResp = await axios.delete(
        `/api/user/watchlater/${video._id}`
      );
      setWatchLaterList(() => removeWatchLaterResp.data.watchlater);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterList,
        setWatchLaterList,
        addToWatchLaterBtn,
        removeFromWatchLaterBtn,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
