/* eslint-disable no-plusplus */
import Weather from '../../data/data-source';
import { createDashboard } from '../templates/template-creator';

const Dashboard = {
  async render() {
    return `
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    const dashboardContainer = document.querySelector('#main');
    dashboardContainer.innerHTML = createDashboard();
  },
};

export default Dashboard;
