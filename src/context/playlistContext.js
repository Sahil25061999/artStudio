import React, { useContext, createContext, useReducer } from 'react';

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        clickedVideo: { ...action.payload },
        displayPlaylistModal: !state.displayPlaylistModal,
      };
    case 'GET_PLAYLIST':
    case 'CREATE_PLAYLIST':
      return { ...state, playlist: [...action.payload] };
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
  const [
    { playlist, clickedVideo, displayPlaylistModal },
    dispatchPlaylistModal,
  ] = useReducer(reducerFunc, {
    playlist: [],
    clickedVideo: {},
    displayPlaylistModal: false,
  });
  return (
    <PlaylistContext.Provider
      value={{
        dispatchPlaylistModal,
        playlist,
        clickedVideo,
        displayPlaylistModal,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
