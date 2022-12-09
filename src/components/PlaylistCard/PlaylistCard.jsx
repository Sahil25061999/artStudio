import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usePlaylist, useSnackbar } from '../../context/context_index';
import { getToken } from '../../utils/getToken';
import '../VideoCard/VideoCard.css';
import './PlaylistCard.css';

export const PlaylistCard = ({ playlist }) => {
  const { dispatchPlaylistModal } = usePlaylist();
  const { dispatchSnacks } = useSnackbar();
  const token = getToken();
  const deletePlayist = async () => {
    try {
      const deletePlaylistResp = await axios.delete(
        `/api/user/playlists/${playlist._id}`,
        { headers: { authorizaton: token } }
      );
      dispatchPlaylistModal({
        type: 'CREATE_PLAYLIST',
        payload: [...deletePlaylistResp.data.playlists],
      });
      console.log(deletePlaylistResp);
    } catch (e) {
      console.error(e);
    }
  };

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
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatchSnacks({
                type: 'DISPLAY_SNACK',
                payload: `${playlist.title} deleted.`,
              });
              deletePlayist();
            }}
            className="btn btn-only-icon card-action-btn  delete-playlist-btn"
          >
            <span className="fa-solid fa-trash "></span>
          </button>
        </div>
      </div>
    </div>
  );
};
