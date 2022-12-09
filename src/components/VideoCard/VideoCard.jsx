import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VideoCard.css';
import {
  useWatchLater,
  usePlaylist,
  useLikedList,
  useCurrVideo,
  useHistory,
  useAuth,
  useSnackbar,
} from '../../context/context_index';

export const VideoCard = ({ video }) => {
  const { thumbnailSrc, creator: channelName, title: videoTitle } = video;
  const {
    auth: { isLoggedIn },
  } = useAuth();
  /* To update button style */
  const [like, setLike] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  /* */
  const { likedList, likedVideoBtn, dislikeVideoBtn } = useLikedList();
  const { addToHistory, removeFromHistory } = useHistory();
  const { watchLaterList, addToWatchLaterBtn, removeFromWatchLaterBtn } =
    useWatchLater();
  const { setCurrVideo } = useCurrVideo();
  const { dispatchSnacks } = useSnackbar();
  const { dispatchPlaylistModal } = usePlaylist();

  const navigate = useNavigate();
  const location = useLocation();

  const openPlaylistModal = () => {
    dispatchPlaylistModal({ type: 'OPEN_MODAL', payload: video });
  };

  const handleVideoClick = () => {
    setCurrVideo(() => ({ ...video }));
    navigate(`/watch/${video._id}`);
    addToHistory(video);
  };

  const checkLogin = (btn) => {
    setTimeout(() => {
      // setDisplaySnack(false);
      // setSnacks([]);
    }, 5000);
  };

  useEffect(() => {
    setLike(likedList.some(({ _id: currVidId }) => currVidId === video._id));
    setWatchLater(
      watchLaterList.some(({ _id: currVidId }) => currVidId === video._id)
    );
  }, [likedList, watchLaterList]);

  return (
    <div className="video-card ">
      <div className="card-image-container" onClick={() => handleVideoClick()}>
        <img
          className="card-image video-card-image"
          src={thumbnailSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head" onClick={() => handleVideoClick()}>
        <h4 className="card-heading h4">{videoTitle}</h4>
        <p className="video-card-subheading h5">{channelName}</p>
        {/* <p className="video-card-subheading">{video.dateUploaded}</p> */}
      </div>
      {isLoggedIn && !location.pathname.includes('watch/') ? (
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
                  dislikeVideoBtn(video);
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
                  likedVideoBtn(video);
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
                  removeFromWatchLaterBtn(video);
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
                  addToWatchLaterBtn(video);
                }}
                className=" btn btn-only-icon card-action-btn"
              >
                <span className="fas fa-clock"></span>
              </button>
            )}
          </div>
          {location.pathname === '/history' ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatchSnacks({
                  type: 'Display_SNACK',
                  payload: 'Removed from history',
                });
                removeFromHistory(video);
              }}
              className="btn btn-only-icon card-action-btn  delete-btn"
            >
              <span className="fa-solid fa-trash "></span>
            </button>
          ) : (
            ''
          )}
        </div>
      ) : null}
    </div>
  );
};
