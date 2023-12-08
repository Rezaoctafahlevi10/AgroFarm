import { createNote } from '../templates/template-creator';

const Pencatatan = {
  async render() {
    return `
    <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    const pencatatanContainer = document.querySelector('#main');
    pencatatanContainer.innerHTML = createNote();
  },
};

export default Pencatatan;
