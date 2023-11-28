import Weather from '../../data/data-source';
import { createWeatherDetail } from '../templates/template-creator';

const Prediction = {
  async render() {
    return `
      <div class="" id="weather"></div>
    `;
  },

  async afterRender() {
    const weather = await Weather.detailWeather();
    const weatherContainer = document.querySelector('#weather');
    weatherContainer.innerHTML += createWeatherDetail(weather);
  },
};

export default Prediction;
