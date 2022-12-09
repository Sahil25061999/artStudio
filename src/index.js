import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import {
  CategoryProvider,
  VideoListProvider,
  CurrVideoProvider,
  WatchLaterProvider,
  PlaylistProvider,
  AuthProvider,
  LikedListProvider,
  HistoryProvider,
  FilterProvider,
  SnackbarProvider,
} from './context/context_index';
import { BrowserRouter as Router } from 'react-router-dom';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider>
        <AuthProvider>
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
        </AuthProvider>
      </SnackbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
