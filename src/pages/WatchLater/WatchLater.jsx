import React, { useEffect } from 'react';
import axios from 'axios';
import { useVideoList, useWatchLater } from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getToken } from '../../utils/utils_index';
import { VideoCard, VideoList } from '../../components/components_index';
import './WatchLater.css';

export const WatchLater = () => {
  const { videoInformation } = useVideoList();
  const { watchLaterList, setWatchLaterList } = useWatchLater();
  const token = getToken();

  useDocumentTitle('Watchlater | ArtStudio');

  useEffect(() => {
    (async () => {
      try {
        const watchLaterResp = await axios.get('api/user/watchlater', {
          headers: { authorization: token },
        });
        setWatchLaterList(() => watchLaterResp.data.watchlater);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [videoInformation]);
  return (
    <div className="video-page app">
      <VideoList>
        {watchLaterList.length ? (
          watchLaterList.map((item) => (
            <VideoCard key={item._id} video={item} />
          ))
        ) : (
          <h1>There are currently no videos in watchlater list.</h1>
        )}
      </VideoList>
    </div>
  );
};
