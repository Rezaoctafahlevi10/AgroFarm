import Weather from '../../data/data-source';
import dataPlace from '../../global/data-place';
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
    const registerContainer = document.querySelector('#main');
    registerContainer.innerHTML = createFormRegister();

    const provinceSel = document.getElementById('provinsi');
    const citySel = document.getElementById('kota');

    Object.keys(dataPlace).forEach((province) => {
      provinceSel.options[provinceSel.options.length] = new Option(province, province);
    });

    provinceSel.addEventListener('change', () => {
      citySel.length = 1;

      const selectedProvince = dataPlace[provinceSel.value];

      if (selectedProvince) {
        selectedProvince.forEach((city) => {
          citySel.options[citySel.options.length] = new Option(city, city);
        });
      }
    });

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
        provinsi: provinsi.value.replace(/\s/g, ''),
        kota: kota.value,
        password: password.value,
        confPassword: confPassword.value,
      };
      Weather.register(registerData);
    });
  },
};

export default Register;
