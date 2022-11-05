import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoCard.css';
import {
  useWatchLikeList,
  usePlaylist,
  useVideoList,
  useLikedList,
} from '../../context/context_index';

import { useToken } from '../../hook/hook_index';

export const VideoCard = ({ video }) => {
  const { videoInformation, setVideoInformation } = useVideoList();
  const { dispatchLikedList } = useLikedList();
  const [like, setLike] = useState(false);
  const token = useToken();
  const {
    watchLikeList: { watchLater, likedList },
    watchLikeListDispatch,
  } = useWatchLikeList();
  const { dispatchPlaylistModal } = usePlaylist();
  const { thumbnailSrc, creator: channelName, title: videoTitle } = video;

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
      dispatchLikedList({ type: 'LIKE_VIDEO', payload: likeResp.data.likes });
      setLike(!like);
      setVideoInformation([
        ...videoInformation,
        { ...video, liked: !video.liked },
      ]);
      // console.log(likeResp);
    } catch (e) {
      console.error(e);
    }
  };

  const openPlaylistModal = () => {
    // dispatchPlaylistModal({ type: 'TOGGLE_MODAL' });
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: video });
  };

  return (
    <div
      className="card video-card-container"
      // style={{
      //   backgroundImage: ` linear-gradient(to top,black,rgba(255,255,255,.2)),url(${thumbnailSrc})
      //   `,
      // }}
    >
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
      <div className="card-foot">
        <button
          onClick={() => openPlaylistModal()}
          className="btn btn-only-icon btn-black"
        >
          {/* Open */}
          <span className="fas fa-layer-group"></span>
        </button>
        <button
          onClick={(e) => likedVideoBtn()}
          className={`${
            video.liked ? 'btn-like-active ' : ''
          }btn btn-only-icon btn-black`}
        >
          <span className="fas fa-heart"></span>
        </button>
        <button
          onClick={() => addToWatchLaterBtn()}
          className="btn btn-only-icon btn-black"
        >
          <span className="fas fa-clock"></span>
        </button>
      </div>
    </div>
  );
};
