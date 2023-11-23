import Weather from '../../data/weather-source';
import { createDashboard } from '../templates/template-creator';

const Dashboard = {
  async render() {
    return `
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    const weather = await Weather.listWeather();
    const weatherContainer = document.querySelector('#main');
    weatherContainer.innerHTML += createDashboard(weather);
  },
};

export default Dashboard;
