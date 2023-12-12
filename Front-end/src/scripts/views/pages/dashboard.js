import { createDashboard } from '../templates/template-creator';

const Dashboard = {
  async render() {
    return `
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    const dashboardContainer = document.querySelector('#main');
    dashboardContainer.innerHTML = createDashboard();
  },
};

export default Dashboard;
