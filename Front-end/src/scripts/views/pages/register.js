import Weather from '../../data/data-source';
import { createFormRegister } from '../templates/template-creator';

const Register = {
  async render() {
    return `
    <div class="regis">
      <div class="innerRegist" id="main"></div>
    </div>
    `;
  },

  async afterRender() {
    const weather = await Weather.listWeather();
    const weatherContainer = document.querySelector('#main');
    weatherContainer.innerHTML = createFormRegister(weather);

    const submitForm = document.querySelector('#buttonSave');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const provinsi = document.getElementById('provinsi');
    const kota = document.getElementById('kota');
    const password = document.getElementById('password');
    const confPassword = document.getElementById('confPassword');

    submitForm.addEventListener('click', async (e) => {
      e.stopPropagation();
      const registerData = {
        username: username.value,
        email: email.value,
        provinsi: provinsi.value,
        kota: kota.value,
        password: password.value,
        confPassword: confPassword.value,
      };
      Weather.register(registerData);
    });
  },
};

export default Register;
