import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { useToken } from '../hook/hook_index';

const LikedListContext = createContext([]);

export const LikedListProvider = ({ children }) => {
  const [likedList, setLikedList] = useState([]);
  const token = useToken();

  return (
    <LikedListContext.Provider value={{ likedList, setLikedList }}>
      {children}
    </LikedListContext.Provider>
  );
};

export const useLikedList = () => useContext(LikedListContext);
