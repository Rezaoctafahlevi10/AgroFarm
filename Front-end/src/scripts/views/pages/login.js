import Weather from '../../data/data-source';
import { createFormLogin } from '../templates/template-creator';

const Login = {
  async render() {
    return `
    <div class="login-page" id="main">
    </div>
      `;
  },
  async afterRender() {
    await Weather.checkAuth();
    const weatherContainer = document.querySelector('#main');
    weatherContainer.innerHTML = createFormLogin();

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
