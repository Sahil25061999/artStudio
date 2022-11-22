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
  // const { videoInformation } = useVideoList();

  const token = getToken();
  useDocumentTitle('History | ArtStudio');

  // const {
  //   watchLikeList: { likedList },
  //   watchLikeListDispatch,
  // } = useWatchLikeList();
  // console.log('first', likedList);

  // useEffect(() => {
  //   console.log('second', likedList);

  //   watchLikeListDispatch({
  //     type: 'LIKED_VIDEOS',
  //     payload: [
  //       ...likedList
  //         .map((item) => {
  //           return videoInformation.filter((video) => {
  //             if (video._id === item._id) {
  //               return { ...video };
  //             }
  //           });
  //         })
  //         .reduce((accValue, currValue) => [...accValue, ...currValue], []),
  //     ],
  //   });
  // }, [videoInformation]);

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
        {historyList.length &&
          historyList.map((item) => <VideoCard video={item} />)}
      </VideoList>
    </div>
  );
};
