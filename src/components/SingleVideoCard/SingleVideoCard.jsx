import React, { useState, useEffect } from 'react';
import { getDocumentTitle } from '../../utils/utils_index';
import { useDocumentTitle } from '../../hook/useDocumentTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  useWatchLater,
  usePlaylist,
  useVideoList,
  useLikedList,
  useCurrVideo,
  useHistory,
} from '../../context/context_index';
import { getToken } from '../../utils/utils_index';
import './SingleVideoCard.css';

export const SingleVideoCard = () => {
  const counter = 0;
  const { likedList, setLikedList } = useLikedList();
  const { watchLaterList, setWatchLaterList } = useWatchLater();
  const { dispatchPlaylistModal } = usePlaylist();
  const { currVideo } = useCurrVideo();
  const {
    creator: channelName,
    title: videoTitle,
    liked,
    watchlater,
    source,
  } = currVideo;
  const [like, setLike] = useState(liked);
  const [watchLater, setWatchLater] = useState(watchlater);
  const token = getToken();
  axios.defaults.headers.common['authorization'] = token;

  useDocumentTitle(currVideo.title, currVideo);

  const addToWatchLaterBtn = async () => {
    try {
      const watchLaterResp = await axios.post('/api/user/watchlater', {
        currVideo,
      });
      setWatchLaterList(() => watchLaterResp.data.watchlater);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromWatchLaterBtn = async () => {
    try {
      const removeWatchLaterResp = await axios.delete(
        `/api/user/watchlater/${currVideo._id}`
      );
      setWatchLaterList(() => removeWatchLaterResp.data.watchlater);
    } catch (e) {
      console.error(e);
    }
  };
  const likedVideoBtn = async (e) => {
    try {
      const likeResp = await axios.post('/api/user/likes', { currVideo });
      setLikedList(() => likeResp.data.likes);
    } catch (e) {
      console.error(e);
    }
  };

  const dislikeVideoBtn = async (e) => {
    try {
      const dislikeResp = await axios.delete(
        `/api/user/likes/${currVideo._id}`
      );
      setLikedList(() => dislikeResp.data.likes);
    } catch (e) {
      console.error(e);
    }
  };

  const openPlaylistModal = () => {
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: currVideo });
  };

  useEffect(() => {
    console.log(likedList);
    setLike(
      likedList.some(({ _id: currVidId }) => currVidId === currVideo._id)
    );
    setWatchLater(
      watchLaterList.some(({ _id: currVidId }) => currVidId === currVideo._id)
    );
    window.scrollTo(0, 0);
  }, [likedList, watchLaterList, currVideo]);

  return (
    <div className=" video-card-single">
      <div className="card-video-container">
        <iframe
          src={source}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-head">
        <h2 className="card-heading ">{videoTitle}</h2>
        <p className="vide-card-subheading">{channelName}</p>
      </div>
      {/* <div className="card-content"></div> */}
      <div className="card-foot video-card-foot">
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openPlaylistModal();
            }}
            className="btn btn-only-icon  card-action-btn"
          >
            {/* Open */}
            <span className="fas fa-layer-group"></span>
          </button>
          {like ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                dislikeVideoBtn();
              }}
              className="btn-like-active btn btn-only-icon card-action-btn "
            >
              <span className="fas fa-thumbs-up"></span>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                likedVideoBtn();
              }}
              className="btn btn-only-icon card-action-btn"
            >
              <span className="fas fa-thumbs-up"></span>
            </button>
          )}
          {watchLater ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromWatchLaterBtn();
              }}
              className="btn-like-active btn btn-only-icon card-action-btn"
            >
              <span className="fas fa-clock"></span>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWatchLaterBtn();
              }}
              className=" btn btn-only-icon card-action-btn"
            >
              <span className="fas fa-clock"></span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
