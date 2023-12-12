import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}provinces`,
  DETAIL: `${CONFIG.BASE_URL}weather/DKIjakarta`,
  ARTICLE: `${CONFIG.BACK_END}article`,
  USERS: `${CONFIG.BACK_END}users`,
  LOGIN: `${CONFIG.BACK_END}login`,
  LOGOUT: `${CONFIG.BACK_END}logout`,
  TOKEN: `${CONFIG.BACK_END}token`,
};

export default API_ENDPOINT;
