// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Register = {
  async render() {
    return `
    <div class="" id="main"></div>
      <h2>ini adalah halaman Register</h2>
      <form action="http://localhost:3000/register" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Register</button>
      </form>
    `;
  },

  async afterRender() {
    // const weather = await Weather.listWeather();
    // const weatherContainer = document.querySelector('#main');
    // weatherContainer.innerHTML += createDashboard(weather);
    console.log('hallo');
  },
};

export default Register;