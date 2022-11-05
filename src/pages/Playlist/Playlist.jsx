import React, { useEffect } from 'react';
import axios from 'axios';
import { PlaylistCard } from '../../components/components_index';
import {
  useWatchLikeList,
  useToken,
  useVideoList,
} from '../../context/context_index';

export const Playlist = () => {
  const { videoInformation } = useVideoList();
  const {
    watchLikeList: { playlist },
    watchLikeListDispatch,
  } = useWatchLikeList();
  const { token } = useToken();
  useEffect(() => {
    (async () => {
      try {
        const playlistResponse = await axios.get('/api/user/playlists', {
          headers: { authorization: token },
        });
        console.log('playlistPage', playlistResponse);

        watchLikeListDispatch({
          type: 'PLAYLIST',
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
