// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Register = {
  async render() {
    return `
          <div class="" id="main"></div>
          <h2>ini adalah halaman Register</h2>
        `;
  },

  async afterRender() {
    // const weather = await Weather.listWeather();
    // const weatherContainer = document.querySelector('#main');
    // weatherContainer.innerHTML += createDashboard(weather);
    console.log('hallo');
  },
};

export default Register;
