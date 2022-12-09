import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  usePlaylist,
  useVideoList,
  useSnackbar,
} from '../../context/context_index';
import { getToken } from '../../utils/utils_index';
import './PlaylistModal.css';

export const PlaylistModal = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const {
    clickedVideo,
    playlist,
    displayPlaylistModal,
    dispatchPlaylistModal,
  } = usePlaylist();
  const { videoInformation, setVideoInformation } = useVideoList();
  const { dispatchSnacks } = useSnackbar();
  const token = getToken();

  axios.defaults.headers.common['authorization'] = token;

  const handleNewPlaylistTitle = (e) => {
    setTitle(e.target.value);
  };

  const createNewPlaylist = async (e) => {
    e.preventDefault();
    if (title.length <= 0) {
      setError(true);
      return;
    }
    setError(false);
    try {
      const newPlayListResponse = await axios.post('/api/user/playlists', {
        playlist: { title: title },
      });
      dispatchPlaylistModal({
        type: 'CREATE_PLAYLIST',
        payload: newPlayListResponse.data.playlists,
      });
      dispatchSnacks({
        type: 'DISPLAY_SNACK',
        payload: `${title} playlist created.`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const updatePlaylistChanges = (playlistResponse, playlistId, checked) => {
    if (playlistResponse.status === 201 || playlistResponse.status === 200) {
      // add playlist for the clicked video and update the video list.

      if (checked) {
        dispatchPlaylistModal({
          type: 'UPDATE_PLAYLIST',
          payload: playlistResponse.data.playlist.videos.find(
            (item) => item._id === clickedVideo._id
          ),
        });
        setVideoInformation(
          [...videoInformation].map((video) =>
            video._id === clickedVideo._id
              ? { ...video, playlist: [...video.playlist, playlistId] }
              : video
          )
        );
      }
      // remove playlist for the clicked video and update the video list.
      if (!checked) {
        dispatchPlaylistModal({
          type: 'UPDATE_PLAYLIST',
          payload: {
            ...clickedVideo,
            playlist: [
              ...clickedVideo.playlist.filter(
                (currId) => currId !== playlistId
              ),
            ],
          },
        });

        setVideoInformation(
          [...videoInformation].map((video) => {
            if (video._id === clickedVideo._id) {
              return {
                ...video,
                playlist: [
                  ...video.playlist.filter(
                    (currPlaylistId) => currPlaylistId !== playlistId
                  ),
                ],
              };
            }
            return video;
          })
        );
      }

      return;
    }
  };

  const savePlaylist = async (e) => {
    const checked = e.target.checked;
    /* if playlist is checked the video will be added to the playlist */
    if (checked) {
      try {
        const playlistResponse = await axios.post(
          `/api/user/playlists/${e.target.id}`,
          {
            video: {
              ...clickedVideo,
              playlist: [...clickedVideo.playlist, e.target.id],
            },
          }
        );

        updatePlaylistChanges(playlistResponse, e.target.id, checked);
      } catch (e) {
        console.error(e);
      }
      return;
    }
    /* if playlist is unchecked the video will be removed from playist */

    try {
      const playlistResponse = await axios.delete(
        `/api/user/playlists/${e.target.id}/${clickedVideo._id}`
      );

      updatePlaylistChanges(playlistResponse, e.target.id, checked);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const playlistResponse = await axios.get('/api/user/playlists', {});
        dispatchPlaylistModal({
          type: 'CREATE_PLAYLIST',
          payload: playlistResponse.data.playlists,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div
      className={`${
        displayPlaylistModal ? 'playlist-modal-container-show ' : ''
      }modal-container playlist-modal-container`}
    >
      <div
        className={`modal shadow playlist-modal ${
          displayPlaylistModal ? 'playlist-modal-show' : ''
        }`}
      >
        <button
          onClick={() => {
            setTitle('');
            dispatchPlaylistModal({ type: 'CLOSE_MODAL' });
          }}
          className="btn btn-float modal-close-btn"
        >
          <span className="fa-solid fa-xmark"></span>
        </button>

        <form className="modal-form" onClick={(e) => e.stopPropagation()}>
          {/*                   TITLE BOX                           */}
          <div className=" form-head form-content">
            {/* <div className="form-content"> */}
            <h3 className=" modal-title" htmlFor="title">
              Playlist title
              {/* <span className="error-msg"> Somethimg</span> */}
            </h3>
            <div className="modal-input-box">
              <input
                className={`textbox modal-input-title ${
                  error ? 'error-input' : ''
                }`}
                id="title"
                type="text"
                placeholder={error ? 'Input title please ' : 'Enter a Title'}
                onChange={handleNewPlaylistTitle}
                value={title}
              />
              <button
                onClick={createNewPlaylist}
                className="btn  btn-black margin-r-10"
              >
                <span className="fas fa-plus"></span>
              </button>
            </div>
          </div>

          {/*                   Tags                           */}
          <div className="form-content tags">
            <h4 className=" modal-title">Playlist</h4>
            <div className="checkbox-container">
              {playlist.map((item) => {
                return (
                  <label key={item._id} className="margin-r-10 checkbox-item">
                    <input
                      name={item.title}
                      className="checkbox "
                      id={item._id}
                      type="checkbox"
                      onChange={savePlaylist}
                      checked={
                        clickedVideo.playlist?.includes(item._id) || false
                      }
                      value={item.title}
                    />

                    {item.title}
                  </label>
                );
              })}
            </div>
          </div>

          {/*                   Button BOX                           */}
          {/* <div className="form-bottom">
            <button
              onClick={savePlaylist}
              className="btn btn-primary margin-r-10"
              onClick={handleAddNote}
            >
              Save
              {editId ? 'Save' : 'Add'}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

/* TO DO add PLAYLIST_UPDATE in playlistContext, also try setting all playlist like done in note app (eg: work:true,creative:true in noteDispatch)  */
