import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../../hook/useDocumentTitle';
import {
  useWatchLater,
  usePlaylist,
  useLikedList,
  useCurrVideo,
  useSnackbar,
  useAuth,
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
  const {
    auth: { isLoggedIn },
  } = useAuth();
  const [like, setLike] = useState(liked);
  const [watchLater, setWatchLater] = useState(watchlater);
  const { likedList, likedVideoBtn, dislikeVideoBtn } = useLikedList();
  const { watchLaterList, addToWatchLaterBtn, removeFromWatchLaterBtn } =
    useWatchLater();
  const { dispatchPlaylistModal } = usePlaylist();
  const { dispatchSnacks } = useSnackbar();

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
      {isLoggedIn ? (
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
                  dispatchSnacks({
                    type: 'DISPLAY_SNACK',
                    payload: 'Remove from liked list',
                  });
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
                  dispatchSnacks({
                    type: 'DISPLAY_SNACK',
                    payload: 'Add to liked list',
                  });
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
                  dispatchSnacks({
                    type: 'DISPLAY_SNACK',
                    payload: 'Removed from watchlater list',
                  });
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
                  dispatchSnacks({
                    type: 'DISPLAY_SNACK',
                    payload: 'Added to watchlater list',
                  });
                  addToWatchLaterBtn(currVideo);
                }}
                className=" btn btn-only-icon card-action-btn"
              >
                <span className="fas fa-clock"></span>
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
