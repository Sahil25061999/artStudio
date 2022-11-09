import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../VideoCard/VideoCard.css';
import './PlaylistCard.css';
import {
  useToken,
  // useWatchLikeList,
  usePlaylist,
} from '../../context/context_index';

export const PlaylistCard = ({ playlist }) => {
  const { token } = useToken();
  // const { watchLikeListDispatch } = useWatchLikeList();
  const { dispatchPlaylistModal } = usePlaylist();
  const watchLikeListDispatch = 0;
  //   const { thumbnailSrc, creator: channelName, title: videoTitle } = video;
  // console.log(playlist);
  return (
    <div className="card video-card-container playlist-card-container">
      <div className="gradient-container"></div>
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
      <div className="card-head playlist-card-head">
        <h3 className="card-heading ">{playlist.title}</h3>
      </div>

      <div className="card-foot playlist-card-foot">
        <Link to={`/playlist/${playlist._id}`}>
          <button className="btn btn-only-icon btn-black playlist-open-btn">
            <span className="fas fa-folder-open"></span>
          </button>
        </Link>
        {/* <button onClick="" className="btn btn-only-icon btn-black">
          <span className="fas fa-heart"></span>
        </button>
        <button onClick="" className="btn btn-only-icon btn-black">
          <span className="fas fa-clock"></span>
        </button> */}
      </div>
    </div>
  );
};
