import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/utils_index';

const LikedListContext = createContext([]);

export const LikedListProvider = ({ children }) => {
  const [likedList, setLikedList] = useState([]);
  const token = getToken();

  return (
    <LikedListContext.Provider value={{ likedList, setLikedList }}>
      {children}
    </LikedListContext.Provider>
  );
};

export const useLikedList = () => useContext(LikedListContext);
