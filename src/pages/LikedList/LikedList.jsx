import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoCard, VideoList } from '../../components/components_index';
import {
  useVideoList,
  useWatchLikeList,
  useLikedList,
} from '../../context/context_index';
import { getToken } from '../../utils/utils_index';

export const LikedList = () => {
  // const { videoInformation } = useVideoList();

  const token = getToken();

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

  const { likedList, setLikedList } = useLikedList();

  useEffect(() => {
    (async () => {
      try {
        const likeListResp = await axios.get('/api/user/likes', {
          headers: { authorization: token },
        });
        setLikedList(() => likeListResp.data.likes);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="video-page app">
      <VideoList>
        {likedList.length &&
          likedList.map((item) => <VideoCard video={item} />)}
      </VideoList>
    </div>
  );
};
