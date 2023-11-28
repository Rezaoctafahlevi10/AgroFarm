// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Contact = {
  async render() {
    return `
        <div class="" id="main"></div>
        <h2>ini adalah halaman Kontak</h2>
      `;
  },

  async afterRender() {
    // const weather = await Weather.listWeather();
    // const weatherContainer = document.querySelector('#main');
    // weatherContainer.innerHTML += createDashboard(weather);
    console.log('hallo');
  },
};

export default Contact;
