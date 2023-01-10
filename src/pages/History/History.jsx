import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoCard, VideoList } from '../../components/components_index';
import {
  useVideoList,
  useWatchLikeList,
  useHistory,
} from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getToken } from '../../utils/utils_index';

export const History = () => {
  const token = getToken();
  useDocumentTitle('History | ArtStudio');

  const { historyList, setHistoryList } = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const historyListResp = await axios.get('/api/user/history', {
          headers: { authorization: token },
        });
        setHistoryList(() => historyListResp.data.history);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="video-page app">
      <VideoList>
        {historyList.length ? (
          historyList.map((item) => <VideoCard video={item} />)
        ) : (
          <h1>No watch history available</h1>
        )}
      </VideoList>
    </div>
  );
};
