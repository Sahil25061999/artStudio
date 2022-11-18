import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './VideoCard.css';
import {
  useWatchLater,
  usePlaylist,
  useVideoList,
  useLikedList,
  useIndividualVideo,
  useHistory,
} from '../../context/context_index';

import { useToken } from '../../hook/hook_index';

export const VideoCard = ({ video }) => {
  const { videoInformation, setVideoInformation } = useVideoList();
  const { likedList, setLikedList } = useLikedList();
  const { historyList, setHistoryList } = useHistory();
  const { watchLaterList, setWatchLaterList } = useWatchLater();
  const { currVideo, setCurrVideo } = useIndividualVideo();
  const [like, setLike] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const token = useToken();
  const { dispatchPlaylistModal } = usePlaylist();
  const { thumbnailSrc, creator: channelName, title: videoTitle } = video;
  const navigate = useNavigate();

  axios.defaults.headers.common['authorization'] = token;

  const addToWatchLaterBtn = async () => {
    // try {
    //   const response = await axios.post(
    //     '/api/user/watchlater',
    //     { video: video },
    //     {
    //       headers: { authorization: token },
    //     }
    //   );
    //   watchLikeListDispatch({
    //     type: 'WATCH_LATER',
    //     payload: [...response.data.watchlater],
    //   });
    //   // setWatchLater([...response.data.watchlater]);
    // } catch (e) {
    //   console.error(e);
    // }
    try {
      const watchLaterResp = await axios.post('/api/user/watchlater', {
        video,
      });

      setWatchLaterList(() => watchLaterResp.data.watchlater);
    } catch (e) {
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
    // const currVidLikeState = likedList.some(({ _id }) => _id === video._id);
    // if (currVidLikeState) {
    //   try {
    //     const response = await axios.delete(`/api/user/likes/${video._id}`, {
    //       headers: { authorization: token },
    //     });

    //     watchLikeListDispatch({
    //       type: 'LIKED_VIDEOS',
    //       payload: [...response.data.likes],
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }
    //   return;
    // }

    // try {
    //   const response = await axios.post(
    //     '/api/user/likes',
    //     { video: { ...video, liked: !video.liked } },
    //     {
    //       headers: { authorization: token },
    //     }
    //   );

    //   watchLikeListDispatch({
    //     type: 'LIKED_VIDEOS',
    //     payload: [...response.data.likes],
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

    try {
      const likeResp = await axios.post('/api/user/likes', { video });
      setLikedList(() => likeResp.data.likes);
      // setLike(!like);

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
    // dispatchPlaylistModal({ type: 'TOGGLE_MODAL' });
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: video });
  };

  const handleVideoClick = async () => {
    console.log('uo');
    try {
      const historyResp = await axios.post('/api/user/history', { video });
      setHistoryList(() => historyResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log(currVideo);
    setLike(likedList.some(({ _id: currVidId }) => currVidId === video._id));
    setWatchLater(
      watchLaterList.some(({ _id: currVidId }) => currVidId === video._id)
    );
  }, [likedList, watchLaterList]);

  return (
    <div
      className="video-card "
      onClick={handleVideoClick}
      // style={{
      //   backgroundImage: ` linear-gradient(to top,black,rgba(255,255,255,.2)),url(${thumbnailSrc})
      //   `,
      // }}
    >
      <button className="btn btn-only-icon card-action-btn  delete-btn">
        <span className="fa-solid fa-trash "></span>
      </button>
      <div className="card-image-container">
        <img
          className="card-image video-card-image"
          src={thumbnailSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading ">{videoTitle}</h3>
        <p className="card-subheading">{channelName}</p>
      </div>
      {/* <div className="card-content"></div> */}
      <div className="card-foot video-card-foot">
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
            <span className="fas fa-heart"></span>
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              likedVideoBtn();
            }}
            className="btn btn-only-icon card-action-btn"
          >
            <span className="fa-solid fa-heart"></span>
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
  );
};
