import React, { createContext, useContext, useEffect, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    console.log(localStorage.getItem('token'));
    setToken(localStorage.getItem('token'));
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
