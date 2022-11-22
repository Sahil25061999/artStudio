import React, { useEffect } from 'react';
import axios from 'axios';
import { PlaylistCard, VideoList } from '../../components/components_index';
import { useVideoList, usePlaylist } from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getToken } from '../../utils/utils_index';

export const Playlist = () => {
  const { videoInformation } = useVideoList();
  const { playlist, dispatchPlaylistModal } = usePlaylist();
  const token = getToken();

  useDocumentTitle('Playlist | ArtStudio');
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
    <div className="video-page app">
      <VideoList>
        {playlist.length &&
          playlist.map((item) => <PlaylistCard playlist={item} />)}
      </VideoList>
    </div>
  );
};
