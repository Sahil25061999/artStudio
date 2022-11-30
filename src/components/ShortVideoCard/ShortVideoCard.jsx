import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCurrVideo, useHistory } from '../../context/context_index';
import { getToken } from '../../utils/utils_index';

export const ShortVideoCard = ({ video }) => {
  const { setHistoryList } = useHistory();
  const { setCurrVideo } = useCurrVideo();
  const token = getToken();
  const { thumbnailSrc, creator: channelName, title: videoTitle } = video;
  const navigate = useNavigate();

  axios.defaults.headers.common['authorization'] = token;

  const handleVideoClick = async () => {
    setCurrVideo(() => ({ ...video }));
    try {
      navigate(`/watch/${video._id}`);
      const historyResp = await axios.post('/api/user/history', { video });
      setHistoryList(() => historyResp.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="video-card " onClick={() => handleVideoClick()}>
      <div className="card-image-container">
        <img
          className="card-image video-card-image"
          src={thumbnailSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h4 className="card-heading ">{videoTitle}</h4>
        <p className="vide-card-subheading">{channelName}</p>
      </div>
    </div>
  );
};
