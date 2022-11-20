import axios from 'axios';
import { getToken } from '../utils/utils_index';

axios.defaults.headers.common['authorization'] = getToken();

export const addToWatchLater = async (video) => {
  try {
    const watchLaterResp = await axios.post('/api/user/watchlater', {
      video,
    });
    return watchLaterResp.data.watchlater;
  } catch (e) {
    console.log(e);
  }
};
