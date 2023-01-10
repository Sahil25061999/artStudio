import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoCard, VideoList } from '../../components/components_index';
import {
  useVideoList,
  useWatchLikeList,
  useLikedList,
} from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getToken } from '../../utils/utils_index';

export const LikedList = () => {
  const { likedList, setLikedList } = useLikedList();
  const token = getToken();

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

  useDocumentTitle('Liked List | ArtStudio');

  return (
    <div className="video-page app">
      <VideoList>
        {likedList.length ? (
          likedList.map((item) => <VideoCard video={item} />)
        ) : (
          <h1>No liked videos yet.</h1>
        )}
      </VideoList>
    </div>
  );
};
