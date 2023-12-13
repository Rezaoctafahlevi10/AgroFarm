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
    let slides;
    let slideIndex = 0;

    function initSlideshow() {
      slides = document.querySelectorAll('.mySlides');

      function showSlides() {
        let i;

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }

        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }

        if (slides[slideIndex - 1]) {
          slides[slideIndex - 1].style.display = 'block';
        } else {
          console.error('Undefined slide element at index:', slideIndex - 1);
        }

        setTimeout(showSlides, 2000);
      }

      if (!slides.length) {
        console.error('No slides found with class "mySlides".');
      } else {
        showSlides();
      }
    }

    initSlideshow();
  },
};

export default Dashboard;
