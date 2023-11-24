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
<<<<<<< HEAD
//login 
// function toogleLogin() {
//   // Redirect to the login form page
//   window.location.href = "/login";
// }
window.addEventListener('load', () => {
  const loginButton = document.getElementsByClassName("popup-login")

  loginButton.addEventListener('click', () => {
    // Redirect to the login form page
    window.location.href = "/login";
  });
});
=======
>>>>>>> e3e76662da74ec8b573d1c87a0055250ebd4086b
