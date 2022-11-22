import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Homepage,
  VideoList,
  WatchLater,
  LikedList,
  Playlist,
  IndividualPlaylist,
  Login,
  Signup,
  History,
  SingleVideoPage,
} from './pages/pages_index';
import {
  Navbar,
  PlaylistModal,
  SideNavbar,
  RequiresAuth,
} from './components/components_index';
import Mockman from 'mockman-js';

function App() {
  const location = useLocation();
  const { pathname: currentPath } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="App">

    <>
      <PlaylistModal />
      <Navbar />
      {(() => {
        if (currentPath !== '/login' && currentPath !== '/signup') {
          return <SideNavbar />;
        }
      })()}

      <Routes>
        <Route path="/" element={<Homepage />} />
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

        <Route path="/videolist" element={<VideoList />} />
        <Route path="/Mockman" element={<Mockman />} />
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
    // </div>
  );
}

export default App;
