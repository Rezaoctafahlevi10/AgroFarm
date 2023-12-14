import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}provinces`,
  DETAIL: (provinces) => `${CONFIG.BASE_URL}weather/${provinces}`,
  ARTICLE: '../data/artikel.json',
  USERS: `${CONFIG.BACK_END}users`,
  LOGIN: `${CONFIG.BACK_END}login`,
  LOGOUT: `${CONFIG.BACK_END}logout`,
  TOKEN: `${CONFIG.BACK_END}token`,
  NOTE: `${CONFIG.BACK_END}note`,
};

export default API_ENDPOINT;
