import React, { useContext, createContext, useState, useEffect } from 'react';
import { getToken } from '../utils/utils_index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = getToken();
  console.log(token);

  useEffect(() => {
    if (token?.length > 0) {
      return setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
