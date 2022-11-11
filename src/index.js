import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import {
  CategoryProvider,
  VideoListProvider,
  IndividualVideoProvider,
  TokenProvider,
  WatchLaterProvider,
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
          <IndividualVideoProvider>
            <LikedListProvider>
              <WatchLaterProvider>
                <PlaylistProvider>
                  <VideoListProvider>
                    <CategoryProvider>
                      <App />
                    </CategoryProvider>
                  </VideoListProvider>
                </PlaylistProvider>
              </WatchLaterProvider>
            </LikedListProvider>
          </IndividualVideoProvider>
        </TokenProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
