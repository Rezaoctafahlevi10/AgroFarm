import { createDashboard } from '../templates/template-creator';
import Weather from '../../data/data-source';

const Dashboard = {
  async render() {
    return `
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    await Weather.refreshToken();
    const dashboardContainer = document.querySelector('#main');
    dashboardContainer.innerHTML = createDashboard();
  },
};

export default Dashboard;
