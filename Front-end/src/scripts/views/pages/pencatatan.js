import Weather from '../../data/data-source';
import { createNote } from '../templates/template-creator';

const Pencatatan = {
  async render() {
    return `
    <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    const pencatatanContainer = document.querySelector('#main');
    pencatatanContainer.innerHTML = createNote();
  },
};

export default Pencatatan;
