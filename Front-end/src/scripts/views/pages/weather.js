import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import API_ENDPOINT from '../../global/api-endpoint';
import Weather from '../../data/data-source';
import { createWeatherDetail } from '../templates/template-creator';

const Prediction = {
  async render() {
    return `
      <div class="" id="weather-container"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    try {
      Weather.checkMiddleware();
      const responseToken = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      const decoded = jwtDecode(responseToken.data.accessToken);
      const getUserKota = decoded.kota;
      const weather = await Weather.detailWeather(getUserKota - 1);
      const weatherContainer = document.querySelector('#weather-container');
      weatherContainer.innerHTML = createWeatherDetail(weather);
    } catch (error) {
      /* empty */
    }
  },
};

export default Prediction;
