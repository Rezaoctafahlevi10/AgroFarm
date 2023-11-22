import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}province`,
  DETAIL: (id) => `${CONFIG.BASE_URL}weather/${id}`,
};

export default API_ENDPOINT;
