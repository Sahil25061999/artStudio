import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../../hook/useDocumentTitle';
import {
  useWatchLater,
  usePlaylist,
  useLikedList,
  useCurrVideo,
} from '../../context/context_index';
import './SingleVideoCard.css';

export const SingleVideoCard = () => {
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
  const { likedList, likedVideoBtn, dislikeVideoBtn } = useLikedList();
  const { watchLaterList, addToWatchLaterBtn, removeFromWatchLaterBtn } =
    useWatchLater();
  const { dispatchPlaylistModal } = usePlaylist();

  useDocumentTitle(currVideo.title, currVideo);

  const openPlaylistModal = () => {
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: currVideo });
  };

  useEffect(() => {
    setLike(
      likedList?.some(({ _id: currVidId }) => currVidId === currVideo._id)
    );
    setWatchLater(
      watchLaterList?.some(({ _id: currVidId }) => currVidId === currVideo._id)
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
                dislikeVideoBtn(currVideo);
              }}
              className="btn-like-active btn btn-only-icon card-action-btn "
            >
              <span className="fas fa-thumbs-up"></span>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                likedVideoBtn(currVideo);
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
                removeFromWatchLaterBtn(currVideo);
              }}
              className="btn-like-active btn btn-only-icon card-action-btn"
            >
              <span className="fas fa-clock"></span>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWatchLaterBtn(currVideo);
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
