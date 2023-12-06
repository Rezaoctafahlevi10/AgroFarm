// import Weather from '../../data/weather-source';
// import { createDashboard } from '../templates/template-creator';

const Contact = {
  async render() {
    return `
    <div class="contact">
    <h2>Contact US</h2>
    <p>Feel free to connect with us on social media:</p>

    <div class="row">
        <!-- GitHub -->
        <div class="col-md-4">
            <a href="https://github.com/username" target="_blank" class="btn btn-dark btn-lg btn-block mb-2">
                <img src="https://github.com/fluidicon.png" alt="GitHub Logo" class="mr-2" width="20">
                GitHub
            </a>
        </div>

        <!-- Instagram -->
        <div class="col-md-4">
            <a href="https://www.instagram.com/username/" target="_blank" class="btn btn-danger btn-lg btn-block mb-2">
                <img src="https://www.svgrepo.com/show/157806/instagram.svg" alt="Instagram Logo" class="mr-2" width="20">
                Instagram
            </a>
        </div>

        <!-- Discord -->
        <div class="col-md-4">
            <a href="https://discord.gg/your-discord-server" target="_blank" class="btn btn-primary btn-lg btn-block mb-2">
                <img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Discord Logo" class="mr-2" width="20">
                Discord
            </a>
        </div>
    </div>
</div>

      `;
  },

  async afterRender() {
    // const weather = await Weather.listWeather();
    // const weatherContainer = document.querySelector('#main');
    // weatherContainer.innerHTML += createDashboard(weather);
    console.log('hallo');
  },
};

export default Contact;
