import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useToken,
  useVideoList,
  useWatchLikeList,
} from '../../context/context_index';
import { VideoCard } from '../../components/components_index';
import './WatchLater.css';

export const WatchLater = () => {
  const { videoInformation } = useVideoList();
  const {
    watchLikeList: { watchLater },
    watchLikeListDispatch,
  } = useWatchLikeList();

  useEffect(() => {
    watchLikeListDispatch({
      type: 'WATCH_LATER',
      payload: watchLater
        .map((item) => {
          return videoInformation.filter((video) => {
            if (video._id === item._id) {
              return { ...video };
            }
          });
        })
        .reduce((accValue, currValue) => [...accValue, ...currValue], []),
    });
  }, [videoInformation]);
  return (
    <div className="video-page">
      <div className="video-list-section ">
        <div className="video-list-container">
          {watchLater.length &&
            watchLater.map((item) => <VideoCard video={item} />)}
        </div>
      </div>
    </div>
  );
};
