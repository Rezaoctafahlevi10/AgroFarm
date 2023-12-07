// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Contact = {
  async render() {
    return `
    <div class="">
    <h2>MAU DI GANTI KE ARTIKEL</h2>
    </div>

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
