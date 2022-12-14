import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Homepage,
  WatchLater,
  LikedList,
  Playlist,
  IndividualPlaylist,
  Login,
  Signup,
  History,
  SingleVideoPage,
  SearchPage,
} from './pages/pages_index';
import {
  Navbar,
  PlaylistModal,
  SideNavbar,
  RequiresAuth,
  Snackbar,
} from './components/components_index';

function App() {
  const location = useLocation();
  const { pathname: currentPath } = location;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Snackbar />
      <PlaylistModal />
      <Navbar />
      {(() => {
        if (currentPath !== '/login' && currentPath !== '/signup') {
          return <SideNavbar />;
        }
      })()}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
        <Route path="/search/" element={<SearchPage />} />

        {/* Private Routes */}
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />

        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedlist"
          element={
            <RequiresAuth>
              <LikedList />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <RequiresAuth>
              <IndividualPlaylist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watch/:watchId" element={<SingleVideoPage />} />
      </Routes>
    </>
  );
}

export default App;
