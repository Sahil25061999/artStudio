import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/utils_index';

const LikedListContext = createContext([]);

export const LikedListProvider = ({ children }) => {
  const [likedList, setLikedList] = useState([]);
  const token = getToken();
  axios.defaults.headers.common['authorization'] = token;

  const likedVideoBtn = async (video) => {
    try {
      const likeResp = await axios.post('/api/user/likes', { video });
      setLikedList(() => likeResp.data.likes);
    } catch (e) {
      console.error(e);
    }
  };

  const dislikeVideoBtn = async (video) => {
    try {
      const dislikeResp = await axios.delete(`/api/user/likes/${video._id}`);
      setLikedList(() => dislikeResp.data.likes);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LikedListContext.Provider
      value={{ likedList, setLikedList, likedVideoBtn, dislikeVideoBtn }}
    >
      {children}
    </LikedListContext.Provider>
  );
};

export const useLikedList = () => useContext(LikedListContext);
