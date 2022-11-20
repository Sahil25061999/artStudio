import React, { useContext, createContext, useState } from 'react';

const CurrVideoContext = createContext();

export const CurrVideoProvider = ({ children }) => {
  const [currVideo, setCurrVideo] = useState({});
  return (
    <CurrVideoContext.Provider value={{ currVideo, setCurrVideo }}>
      {children}
    </CurrVideoContext.Provider>
  );
};

export const useCurrVideo = () => useContext(CurrVideoContext);
