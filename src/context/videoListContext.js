import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

const VideoListContext = createContext(null);

export const VideoListProvider = ({ children }) => {
  const [videoInformation, setVideoInformation] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/videos');
      const { videos } = data;

      setVideoInformation([...videos]);
    })();
  }, []);

  return (
    <VideoListContext.Provider
      value={{ videoInformation, setVideoInformation }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export const useVideoList = () => useContext(VideoListContext);
