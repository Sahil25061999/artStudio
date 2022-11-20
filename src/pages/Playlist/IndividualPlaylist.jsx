import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoCard, VideoList } from '../../components/components_index';
import { usePlaylist, useVideoList } from '../../context/context_index';
import { getToken } from '../../utils/utils_index';

export const IndividualPlaylist = () => {
  const token = getToken();
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
    <div className="video-page app">
      <VideoList>
        {playlistVideoList.length &&
          playlistVideoList.map((item) => <VideoCard video={item} />)}
      </VideoList>
    </div>
  );
};
