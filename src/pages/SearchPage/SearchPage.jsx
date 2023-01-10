import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  VideoCard,
  VideoList,
  SortBy,
} from '../../components/components_index';
import { useVideoList, useFilter } from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import { getSortedList } from '../../utils/utils_index';

export const SearchPage = () => {
  const { videoInformation } = useVideoList();
  const { searchQuery } = useParams();
  const {
    filter: { search, sort },
    dispatchFilter,
  } = useFilter();

  let filteredList = getSortedList(
    videoInformation.filter((item) =>
      item.title.toLowerCase().includes(search)
    ),
    sort
  );
  useDocumentTitle(`${search} | ArtStudio`, search);
  useEffect(() => {
    window.scroll(0, 0);
  }, [search]);

  return (
    <div className="video-page app">
      <SortBy />
      <VideoList>
        {filteredList?.length ? (
          filteredList.map((item) => <VideoCard video={item} />)
        ) : (
          <h1 className="search-title">
            No results for <b>"{search}"</b>
          </h1>
        )}
      </VideoList>
    </div>
  );
};
