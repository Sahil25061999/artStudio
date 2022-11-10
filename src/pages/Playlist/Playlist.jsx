import React, { useEffect } from 'react';
import axios from 'axios';
import { PlaylistCard } from '../../components/components_index';
import { useVideoList, usePlaylist } from '../../context/context_index';
import { useToken } from '../../hook/hook_index';

export const Playlist = () => {
  const { videoInformation } = useVideoList();
  const { playlist, dispatchPlaylistModal } = usePlaylist();
  const token = useToken();
  useEffect(() => {
    (async () => {
      try {
        const playlistResponse = await axios.get('/api/user/playlists', {
          headers: { authorization: token },
        });
        console.log('playlistPage', playlistResponse);

        dispatchPlaylistModal({
          type: 'GET_PLAYLIST',
          payload: playlistResponse.data.playlists,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [videoInformation]);

  return (
    <div className="video-page">
      <div className="video-list-section ">
        <div className="video-list-container">
          {playlist.length &&
            playlist.map((item) => <PlaylistCard playlist={item} />)}
        </div>
      </div>
    </div>
  );
};
