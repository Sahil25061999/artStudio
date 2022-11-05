import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoCard } from '../../components/components_index';
import {
  useVideoList,
  useWatchLikeList,
  useLikedList,
} from '../../context/context_index';
import { useToken } from '../../hook/hook_index';

export const LikedList = () => {
  // const { videoInformation } = useVideoList();

  const token = useToken();

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

  const { likedList, dispatchLikedList } = useLikedList();

  useEffect(() => {
    (async () => {
      try {
        const likeListResp = await axios.get('/api/user/likes', {
          headers: { authorization: token },
        });
        dispatchLikedList({
          type: 'GET_LIKE_LIST',
          payload: likeListResp.data.likes,
        });
      } catch (e) {
        console.error(e);
      }
    })();
    // dispatchLikedList({ type: 'GET_LIKE_LIST' });
    // console.log(typeof likedList);
  }, []);

  return (
    <div className="video-page">
      <div className="video-list-section ">
        <div className="video-list-container">
          {likedList.length &&
            likedList.map((item) => <VideoCard video={item} />)}
        </div>
      </div>
    </div>
  );
};
