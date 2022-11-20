import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../VideoCard/VideoCard.css';
import './PlaylistCard.css';
import { useToken, usePlaylist } from '../../context/context_index';

export const PlaylistCard = ({ playlist }) => {
  const { token } = useToken();
  const { dispatchPlaylistModal } = usePlaylist();
  const navigate = useNavigate();
  return (
    <div className="video-card playlist-card-container">
      <div className="card-image-container playlist-card-image-container">
        {playlist.videos.slice(0, 4).map((item) => (
          <img
            className="card-image playlist-card-image"
            src={item.thumbnailSrc}
            alt="playlist-image"
            loading="lazy"
          />
        ))}
      </div>
      <div className="playlist-bottom-container">
        <div className="card-head playlist-card-head">
          <h3 className="card-heading ">{playlist.title}</h3>
        </div>

        <div className="card-foot playlist-card-foot">
          <button
            onClick={() => navigate(`/playlist/${playlist._id}`)}
            className="btn btn-only-icon card-action-btn  playlist-open-btn "
          >
            <span className="fas fa-folder-open"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
