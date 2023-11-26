import CONFIG from './config';

const API_ENDPOINT = {
  WEATHER: `${CONFIG.BASE_URL}provinces`,
  DETAIL: `${CONFIG.BASE_URL}weather/jawatimur`,
};

export default API_ENDPOINT;
