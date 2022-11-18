import React, { createContext, useContext, useState } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyList, setHistoryList] = useState([]);
  return (
    <HistoryContext.Provider value={{ historyList, setHistoryList }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
