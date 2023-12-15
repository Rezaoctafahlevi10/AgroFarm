import Weather from '../../data/data-source';
import dataPlace from '../../../public/data/data-place';
import { createFormRegister } from '../templates/template-creator';

const Register = {
  async render() {
    return `
    <img class="background-register" src="../../img/background1.png" alt=""> 
    <div class="innerRegist" id="main"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
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
          citySel.options[citySel.options.length] = new Option(city);
        });
      }
    });

    const submitForm = document.querySelector('#buttonSave');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const provinsi = document.getElementById('provinsi');
    const password = document.getElementById('password');
    const confPassword = document.getElementById('confPassword');

    submitForm.addEventListener('click', async (e) => {
      e.stopPropagation();

      const registerData = {
        username: username.value,
        email: email.value,
        provinsi: provinsi.value.replace(/\s/g, ''),
        kota: citySel.selectedIndex,
        password: password.value,
        confPassword: confPassword.value,
      };
      Weather.register(registerData);
    });
  },
};

export default Register;
