import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Homepage,
  VideoList,
  WatchLater,
  LikedList,
  // Playlist,
  // IndividualPlaylist,
  Login,
  Signup,
} from './pages/pages_index';
import {
  Navbar,
  PlaylistModal,
  SideNavbar,
  RequiresAuth,
} from './components/components_index';
import Mockman from 'mockman-js';

function App() {
  let sideNavbar = null;
  const location = useLocation();
  const { pathname: currentPath } = location;

  return (
    // <div className="App">

    <>
      <PlaylistModal />
      <Navbar />
      {(() => {
        if (currentPath !== '/login' && currentPath !== '/signup') {
          console.log(currentPath, 'enter');
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
        {/* <Route
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
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
    // </div>
  );
}

export default App;
