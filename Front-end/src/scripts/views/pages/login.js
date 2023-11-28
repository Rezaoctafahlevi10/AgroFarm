// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Login = {
  async render() {
    return `
    <div class="login-page" id="main">
      <h2>AGROFARM</h2>
      <div class="inner-log">
        <form id = "LoginForm" action="http://localhost:9000/login"  method="post">
        <label for="username">Email</label>
        <input type="text" id="usernameLog" name="username" required><br>
        <label for="password">Password</label>
        <input type="password" id="passwordLog" name="password" required><br>
        <button type="submit">Login</button>
        </form>
      </div>
    </div>
      `;
  },
  async afterRender() {
  },
};
export default Login;
