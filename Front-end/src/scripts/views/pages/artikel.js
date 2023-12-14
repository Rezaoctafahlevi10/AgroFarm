import Weather from '../../data/data-source';
import { createArticle } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
      <img class="background-login" src="../../img/background1.png" alt=""> 
      <div class="" id="artikel-page"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    const article = await Weather.listArticle();
    const articleContainer = document.querySelector('#artikel-page');
    article.forEach((articleItem) => {
      articleContainer.innerHTML += createArticle(articleItem);
    });
  },
};

export default Artikel;
