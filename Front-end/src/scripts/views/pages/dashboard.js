/* eslint-disable no-plusplus */
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
    let slideIndex = 0;

    function showSlides() {
      let i;
      const slides = document.getElementsByClassName('mySlides');
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      // eslint-disable-next-line no-plusplus
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    showSlides();
  },
};

export default Dashboard;
