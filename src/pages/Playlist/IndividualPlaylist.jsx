import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoCard } from '../../components/components_index';
import { usePlaylist, useVideoList } from '../../context/context_index';
import { useToken } from '../../hook/hook_index';

export const IndividualPlaylist = () => {
  const token = useToken();
  const { videoInformation } = useVideoList();
  const { playlist, dispatchPlaylistModal } = usePlaylist();
  const [playlistVideoList, setPlaylistVideoList] = useState([]);
  let { playlistId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const playlistResponse = await axios.get('/api/user/playlists', {
          headers: { authorization: token },
        });
        dispatchPlaylistModal({
          type: 'GET_PLAYLIST',
          payload: [...playlistResponse.data.playlists],
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [videoInformation]);
  useEffect(() => {
    const currPlaylist = playlist.find((item) => item._id === playlistId);
    console.log(currPlaylist);
    setPlaylistVideoList([...currPlaylist.videos]);
  }, [playlist]);

  return (
    <div className="video-page">
      <div className="video-list-section">
        <div className="list-container">
          {playlistVideoList.length &&
            playlistVideoList.map((item) => <VideoCard video={item} />)}
        </div>
      </div>
    </div>
  );
};
