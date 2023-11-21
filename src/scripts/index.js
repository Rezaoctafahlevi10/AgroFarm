import './components/navbar';
import App from './views/app';
import '../styles/style.css';

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', (e) => {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.popup-login');
const iconclose = document.querySelector('.close');

registerlink.addEventListener('click', () => {
  wrapper.classList.add('active');
});
loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

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
