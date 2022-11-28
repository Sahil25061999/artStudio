import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
import { VideoCard, VideoList } from '../../components/components_index';
import {
  useVideoList,
  useWatchLikeList,
  useLikedList,
  useFilter,
} from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getToken } from '../../utils/utils_index';

export const SearchPage = () => {
  const { videoInformation } = useVideoList();
  const {
    filter: { search },
  } = useFilter();
  const { searchQuery } = useParams();
  let filteredList;
  useDocumentTitle('Liked List | ArtStudio');

  filteredList = videoInformation.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <div className="video-page app">
      <VideoList>
        {filteredList?.length &&
          filteredList.map((item) => <VideoCard video={item} />)}
      </VideoList>
    </div>
  );
};
