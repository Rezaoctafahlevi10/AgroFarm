// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Product = {
  async render() {
    return `
      <div class="" id="main"></div>
      <h2>mau diganti ke page pencatatan</h2>
    `;
  },

  async afterRender() {
    // const weather = await Weather.listWeather();
    // const weatherContainer = document.querySelector('#main');
    // weatherContainer.innerHTML += createDashboard(weather);
    console.log('hallo');
  },
};

export default Product;
