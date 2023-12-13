import Weather from '../../data/data-source';
import { createFormLogin } from '../templates/template-creator';

const Login = {
  async render() {
    return `
      <img class="background-login" src="../../img/background1.png" alt=""> 
      <div class="login-page" id="login-container">
      </div>
    `;
  },
  async afterRender() {
    await Weather.checkAuth();
    const loginContainer = document.querySelector('#login-container');
    loginContainer.innerHTML = createFormLogin();

    const submitForm = document.querySelector('#buttonSave');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    submitForm.addEventListener('click', async (e) => {
      e.stopPropagation();
      const loginData = {
        email: email.value,
        password: password.value,
      };
      Weather.login(loginData);
    });
  },
};
export default Login;
