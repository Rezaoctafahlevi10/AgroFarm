import CONFIG from '../../global/config';

const createDashboard = (restaurant) => `
  <div class="container-list">
    <hero-element></hero-element>
    <weather-prediction></weather-prediction>
    <custom-banner></custom-banner>
    <custom-product></custom-product>
    <pencatatan-element></pencatatan-element>
    <contact-element></contact-element>
  </div>
`;

const createWeatherDetail = (weather) => `
  <div class="container-detail">
    <div class="head">
      <h2>${weather.name}</h2>
    </div>
    <div class="body">
      <p id="address">${weather.city} - ${weather.address}</p>
      <p>${weather.description}</p>
    </div>
  `;

export {
  createDashboard,
  createWeatherDetail,
};
