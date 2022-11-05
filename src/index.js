import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import {
  CategoryProvider,
  VideoListProvider,
  TokenProvider,
  WatchLikeListProvider,
  PlaylistProvider,
  AuthProvider,
  LikedListProvider,
} from './context/context_index';
import { BrowserRouter as Router } from 'react-router-dom';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <TokenProvider>
          <LikedListProvider>
            <WatchLikeListProvider>
              <PlaylistProvider>
                <VideoListProvider>
                  <CategoryProvider>
                    <App />
                  </CategoryProvider>
                </VideoListProvider>
              </PlaylistProvider>
            </WatchLikeListProvider>
          </LikedListProvider>
        </TokenProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
