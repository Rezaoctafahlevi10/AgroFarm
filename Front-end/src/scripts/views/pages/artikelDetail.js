import Weather from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import { createArticleDetail } from '../templates/template-creator';

const ArtikelDetail = {
  async render() {
    return `
      <img class="background-login" src="../../img/background1.png" alt=""> 
      <div class="" id="artikel-detail"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await Weather.detailArticle(url.id);
    console.log(article);
    const articleContainer = document.querySelector('#artikel-detail');
    articleContainer.innerHTML += createArticleDetail(article);
  },
};

export default ArtikelDetail;
