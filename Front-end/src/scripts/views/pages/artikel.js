import Weather from '../../data/data-source';
import { createArticle } from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
      <div id="loading-screen">
        <h1>sedang memuat data</h1>
        <div class="loader"></div>
      </div>
      <img class="background-login" src="../../img/background1.png" alt=""> 
      <div class="" id="artikel-list"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    const article = await Weather.listArticle();
    const articleContainer = document.querySelector('#artikel-list');
    article.forEach((articleItem) => {
      articleContainer.innerHTML += createArticle(articleItem);
    });
  },
};

export default Artikel;
