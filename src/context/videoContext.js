import React, { useContext, createContext, useState } from 'react';

const IndividualVideoContext = createContext();

export const IndividualVideoProvider = ({ children }) => {
  const [currVideo, setCurrVideo] = useState({});
  return (
    <IndividualVideoContext.Provider value={{ currVideo, setCurrVideo }}>
      {children}
    </IndividualVideoContext.Provider>
  );
};

export const useIndividualVideo = () => useContext(IndividualVideoContext);
