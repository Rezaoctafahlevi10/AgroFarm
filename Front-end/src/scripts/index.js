import './components/navbar';
import './components/hero';
import './components/prediction';
import './components/banner';
import './components/artikel';
import './components/footer';
import './components/pencatatan';
import './components/contact';
import './components/formRegister';
import './components/deskripsi';
import App from './views/App';
import '../styles/style.scss';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('#mainContent'),
  logout: document.querySelector('.logout'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
