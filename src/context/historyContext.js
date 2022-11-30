import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/getToken';
const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyList, setHistoryList] = useState([]);
  const token = getToken();
  axios.defaults.headers.common['authorization'] = token;

  const addToHistory = async (video) => {
    try {
      const historyResp = await axios.post('/api/user/history', { video });
      setHistoryList(() => historyResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromHistory = async (video) => {
    try {
      const deleteHistoryResp = await axios.delete(
        `/api/user/history/${video._id}`
      );

      setHistoryList(() => deleteHistoryResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <HistoryContext.Provider
      value={{ historyList, setHistoryList, addToHistory, removeFromHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
