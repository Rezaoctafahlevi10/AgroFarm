import Weather from '../../data/data-source';
import { createWeatherDetail } from '../templates/template-creator';

const Prediction = {
  async render() {
    return `
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    const weather = await Weather.detailWeather();
    const weatherContainer = document.querySelector('#main');
    weatherContainer.innerHTML = createWeatherDetail(weather);
  },
};

export default Prediction;
