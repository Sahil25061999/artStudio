import React, { useContext, createContext, useState, useReducer } from 'react';

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        clickedVideo: { ...action.payload },
        displayPlaylistModal: !state.displayPlaylistModal,
      };
    case 'UPDATE_PLAYLIST':
      return {
        ...state,
        clickedVideo: { ...action.payload },
      };
    case 'CLOSE_MODAL':
      return { ...state, displayPlaylistModal: !state.displayPlaylistModal };
    default:
      return state;
  }
};

const PlaylistContext = createContext(null);

export const PlaylistProvider = ({ children }) => {
  // const [displayPlaylistModal, setPlaylistModal] = useState(false);
  const [{ clickedVideo, displayPlaylistModal }, dispatchPlaylistModal] =
    useReducer(reducerFunc, { clickedVideo: {}, displayPlaylistModal: false });
  return (
    <PlaylistContext.Provider
      value={{ dispatchPlaylistModal, clickedVideo, displayPlaylistModal }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
