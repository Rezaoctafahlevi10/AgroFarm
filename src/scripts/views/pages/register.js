import Weather from '../../data/data-source';
import { createFormRegister } from '../templates/template-creator';

const Register = {
  async render() {
    return `
    <div class="" id="main"></div>
<<<<<<< HEAD
      <h2>ini adalah halaman Register</h2>
      <form action="http://localhost:9000/register" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Register</button>
      </form>
=======
>>>>>>> a577fbb34815248bd6f54ccad8af6d60b708a9c4
    `;
  },

  async afterRender() {
    const weather = await Weather.listWeather();
    const weatherContainer = document.querySelector('#main');
    weatherContainer.innerHTML += createFormRegister(weather);

    const submitForm = document.querySelector('#buttonSave');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const provinsi = document.getElementById('provinsi');
    const kota = document.getElementById('kota');

    submitForm.addEventListener('click', async (e) => {
      e.stopPropagation();
      const registerData = {
        username: username.value,
        email: email.value,
        password: password.value,
        provinsi: provinsi.value,
        kota: kota.value,
      };
      Weather.registerUser(registerData);
    });
  },
};

export default Register;
