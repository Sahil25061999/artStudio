// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { VideoCard } from '../../components/components_index';
// import {
//   useToken,
//   useVideoList,
//   useWatchLikeList,
// } from '../../context/context_index';

// export const IndividualPlaylist = () => {
//   const { token } = useToken();
//   const { videoInformation } = useVideoList();
//   const {
//     watchLikeList: { playlist },
//     watchLikeListDispatch,
//   } = useWatchLikeList();
//   const [playlistVideoList, setPlaylistVideoList] = useState([]);
//   let { playlistId } = useParams();

//   useEffect(() => {
//     (async () => {
//       try {
//         const playlistResponse = await axios.get('/api/user/playlists', {
//           headers: { authorization: token },
//         });
//         console.log('playlistPage', playlistResponse);

//         watchLikeListDispatch({
//           type: 'PLAYLIST',
//           payload: [...playlistResponse.data.playlists],
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     })();
//   }, [videoInformation]);
//   useEffect(() => {
//     console.log('YEAH BITCH');

//     const currPlaylist = playlist.find((item) => item._id === playlistId);
//     console.log(currPlaylist);
//     setPlaylistVideoList([...currPlaylist.videos]);
//   }, [playlist]);

//   return (
//     <div className="video-page">
//       <div className="video-list-section">
//         <div className="video-list-container">
//           {playlistVideoList.length &&
//             playlistVideoList.map((item) => <VideoCard video={item} />)}
//         </div>
//       </div>
//     </div>
//   );
// };
