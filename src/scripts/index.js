import './components/navbar';
import './components/hero';
import './components/prediction';
import './components/banner';
import './components/product';
import './components/footer';
import './components/pencatatan';
import './components/contact';
import App from './views/app';
import '../styles/style.scss';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
