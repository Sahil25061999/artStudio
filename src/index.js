import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import {
  CategoryProvider,
  VideoListProvider,
  CurrVideoProvider,
  TokenProvider,
  WatchLaterProvider,
  PlaylistProvider,
  AuthProvider,
  LikedListProvider,
  HistoryProvider,
  FilterProvider,
} from './context/context_index';
import { BrowserRouter as Router } from 'react-router-dom';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <TokenProvider>
          <CurrVideoProvider>
            <FilterProvider>
              <HistoryProvider>
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
              </HistoryProvider>
            </FilterProvider>
          </CurrVideoProvider>
        </TokenProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
