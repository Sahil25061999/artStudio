import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import { getToken } from '../utils/utils_index';

const AuthContext = createContext();

const authReducerFunc = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN_OUT':
      return { ...state, isLoggedIn: action.payload };

    case 'EMAIL_ERROR':
      return {
        ...state,
        error: { ...state.error, emailErrorMsg: action.payload },
      };
    case 'PASSWORD_ERROR':
      return {
        ...state,
        error: { ...state.error, passwordErrorMsg: action.payload },
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(authReducerFunc, {
    isLoggedIn: false,
    error: { emailErrorMsg: false, passwordErrorMsg: false },
  });
  const token = getToken();

  useEffect(() => {
    if (token?.length > 0) {
      return dispatchAuth({ type: 'LOG_IN', payload: true });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
