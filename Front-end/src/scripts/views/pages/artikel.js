import { createArticle } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
    <h2>ARTIKEL</h2>
    <div class="" id="main"></div>
      `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#main');
    articleContainer.innerHTML = createArticle();
  },
};

export default Artikel;
