import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

const SnackbarContext = createContext();

const snackReducerFunc = (state, action) => {
  switch (action.type) {
    case 'CLOSE_SNACK':
      return { ...state, displaySnack: false, snacks: [] };
    case 'DISPLAY_SNACK':
      return {
        ...state,
        displaySnack: true,
        snacks: [...state.snacks, { _id: uuid(), content: action.payload }],
      };
    default:
      return { ...state };
  }
};

export const SnackbarProvider = ({ children }) => {
  const [{ snacks, displaySnack }, dispatchSnacks] = useReducer(
    snackReducerFunc,
    { snacks: [], displaySnack: false }
  );

  useEffect(() => {
    if (displaySnack) {
      setTimeout(() => {
        dispatchSnacks({ type: 'CLOSE_SNACK' });
      }, 5000);
    }
  }, [displaySnack]);
  return (
    <SnackbarContext.Provider value={{ displaySnack, snacks, dispatchSnacks }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
