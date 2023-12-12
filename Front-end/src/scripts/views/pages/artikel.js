import Weather from '../../data/data-source';
import { createArticle } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
      <h2>ARTIKEL</h2>
      <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    const article = await Weather.listArticle();
    const articleContainer = document.querySelector('#main');
    article.forEach((articleItem) => {
      articleContainer.innerHTML += createArticle(articleItem);
    });
  },
};

export default Artikel;
