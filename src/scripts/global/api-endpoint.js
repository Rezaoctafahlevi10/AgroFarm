import CONFIG from './config';

const API_ENDPOINT = {
  WEATHER: `${CONFIG.BASE_URL}provinces`,
  DETAIL: (id) => `${CONFIG.BASE_URL}weather/${id}`,
};

export default API_ENDPOINT;
