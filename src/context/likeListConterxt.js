import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { useToken } from '../hook/hook_index';

const LikedListContext = createContext([]);

const getLikeVideoList = async () => {
  try {
    const likeListResp = await axios.get('/api/user/likes');
    console.log(likeListResp);
    return likeListResp.data.likes;
  } catch (e) {
    console.error(e);
  }
};

const likeVideo = async (video) => {
  try {
    const likeResp = await axios.post('/api/user/likes', { video });
    return likeResp.data.likes;
  } catch (e) {
    console.error(e);
  }
};

const reducerFuc = (state, action) => {
  switch (action.type) {
    case 'GET_LIKE_LIST':
    case 'LIKE_VIDEO':
      return [...action.payload];

    case 'DISLIKE_VIDEO':
      return;

    default:
      return state;
  }
};

export const LikedListProvider = ({ children }) => {
  const [likedList, dispatchLikedList] = useReducer(reducerFuc, []);
  // const [like,setLike] = useState(false)
  const token = useToken();

  return (
    <LikedListContext.Provider value={{ likedList, dispatchLikedList }}>
      {children}
    </LikedListContext.Provider>
  );
};

export const useLikedList = () => useContext(LikedListContext);
