import React, { useState, useEffect } from 'react';
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

export const SingleVideoCard = ({ video }) => {
  const {
    thumbnailSrc,
    creator: channelName,
    title: videoTitle,
    liked,
    watchlater,
  } = video;

  const { videoInformation, setVideoInformation } = useVideoList();
  const { likedList, setLikedList } = useLikedList();
  const { historyList, setHistoryList } = useHistory();
  const { watchLaterList, setWatchLaterList } = useWatchLater();
  const { currVideo, setCurrVideo } = useCurrVideo();
  const [like, setLike] = useState(liked);
  const [watchLater, setWatchLater] = useState(watchlater);
  const token = getToken();
  const { dispatchPlaylistModal } = usePlaylist();

  const navigate = useNavigate();
  const location = useLocation();

  axios.defaults.headers.common['authorization'] = token;

  // console.log(location);

  const addToWatchLaterBtn = async () => {
    try {
      const watchLaterResp = await axios.post('/api/user/watchlater', {
        video,
      });
      setWatchLaterList(() => watchLaterResp.data.watchlater);
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  };

  const removeFromWatchLaterBtn = async () => {
    try {
      const removeWatchLaterResp = await axios.delete(
        `/api/user/watchlater/${video._id}`
      );
      setWatchLaterList(() => removeWatchLaterResp.data.watchlater);
    } catch (e) {
      console.error(e);
    }
  };
  const likedVideoBtn = async (e) => {
    try {
      const likeResp = await axios.post('/api/user/likes', { video });
      setLikedList(() => likeResp.data.likes);

      // setVideoInformation([
      //   ...videoInformation.map((currVideo) => {
      //     if (currVideo._id == video._id) {
      //       return { ...video, liked: !video.liked };
      //     }
      //     return { ...currVideo };
      //   }),
      // ]);
    } catch (e) {
      console.error(e);
    }
  };

  const dislikeVideoBtn = async (e) => {
    try {
      const dislikeResp = await axios.delete(`/api/user/likes/${video._id}`);
      setLikedList(() => dislikeResp.data.likes);
    } catch (e) {
      console.error(e);
    }
  };

  const openPlaylistModal = () => {
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: video });
  };

  const handleVideoClick = async () => {
    try {
      console.log(currVideo);
      navigate(`/watch/${video._id}`, { state: currVideo });
      const historyResp = await axios.post('/api/user/history', { video });
      setHistoryList(() => historyResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    try {
      const deleteHistoryResp = await axios.delete(
        `/api/user/history/${video._id}`
      );
      console.log(deleteHistoryResp);
      setHistoryList(() => deleteHistoryResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // console.log(currVideo);
    setLike(likedList.some(({ _id: currVidId }) => currVidId === video._id));
    setWatchLater(
      watchLaterList.some(({ _id: currVidId }) => currVidId === video._id)
    );
  }, [likedList, watchLaterList]);

  //   useEffect(() => {
  //     setCurrVideo({ ...video, liked: like, watchlater: watchLater });
  //   }, [like, watchLater]);

  return (
    <div
      className=" video-card-single"
      // onClick={handleVideoClick}
    >
      <div className="card-video-container">
        {/* <img
      className="card-image video-card-image"
      src={thumbnailSrc}
      alt="product-image"
      loading="lazy"
    /> */}
        <iframe
          src="https://www.youtube.com/embed/Qt0ZrQWtQGg"
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
