// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Login = {
  async render() {
    return `
    <div class="" id="main"></div>
        <h2>ini adalah halaman Login</h2>
        <form id = "LoginForm" action="http://localhost:9000/login"  method="post">
        <label for="username">Email:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Login</button>
        </form>
      `;
  },
  async afterRender() {
  },
};
export default Login;
