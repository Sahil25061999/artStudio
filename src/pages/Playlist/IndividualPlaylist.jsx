import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoCard, VideoList } from '../../components/components_index';
import { usePlaylist, useVideoList } from '../../context/context_index';
import { getToken } from '../../utils/utils_index';
import { useDocumentTitle } from '../../hook/hook_index';

export const IndividualPlaylist = () => {
  const { videoInformation } = useVideoList();
  const { playlist, dispatchPlaylistModal } = usePlaylist();
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [playlistVideoList, setPlaylistVideoList] = useState([]);
  const token = getToken();
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
    setPlaylistTitle(currPlaylist.title);
    setPlaylistVideoList([...currPlaylist.videos]);
  }, [playlist]);

  useDocumentTitle(`${playlistTitle} | Playist | ArtStudio  `, playlistTitle);

  return (
    <div className="video-page app">
      <VideoList>
        {playlistVideoList.length &&
          playlistVideoList.map((item) => <VideoCard video={item} />)}
      </VideoList>
    </div>
  );
};
