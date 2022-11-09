import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useVideoList, useWatchLater } from '../../context/context_index';
import { useToken } from '../../hook/hook_index';
import { VideoCard } from '../../components/components_index';
import './WatchLater.css';

export const WatchLater = () => {
  const { videoInformation } = useVideoList();
  const { watchLaterList, dispatchWatchLater } = useWatchLater();
  const token = useToken();

  useEffect(() => {
    (async () => {
      try {
        const watchLaterResp = await axios.get('api/user/watchlater', {
          headers: { authorization: token },
        });
        dispatchWatchLater({
          type: 'GET_WATCH_LATER',
          payload: watchLaterResp.data.watchlater,
        });
      } catch (e) {
        console.error(e);
      }
    })();

    // watchLikeListDispatch({
    //   type: 'WATCH_LATER',
    //   payload: watchLater
    //     .map((item) => {
    //       return videoInformation.filter((video) => {
    //         if (video._id === item._id) {
    //           return { ...video };
    //         }
    //       });
    //     })
    //     .reduce((accValue, currValue) => [...accValue, ...currValue], []),
    // });
  }, [videoInformation]);
  return (
    <div className="video-page">
      <div className="video-list-section ">
        <div className="video-list-container">
          {watchLaterList.length &&
            watchLaterList.map((item) => (
              <VideoCard key={item._id} video={item} />
            ))}
        </div>
      </div>
    </div>
  );
};
