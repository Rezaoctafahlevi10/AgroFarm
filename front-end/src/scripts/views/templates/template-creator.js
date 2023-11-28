import CONFIG from '../../global/config';
import weatherType from '../../global/weather-type';
import dateConverter from '../../global/date-converter';

const createDashboard = () => `
  <div class="container-list">
    <hero-element></hero-element>
    <weather-prediction></weather-prediction>
    <custom-banner></custom-banner>
    <custom-product></custom-product>
    <pencatatan-element></pencatatan-element>
    <contact-element></contact-element>
  </div>
`;

const createFormRegister = () => `
  <div class="container-list">
    <h2>Registrasi Akunmu</h2>
    <register-form></register-form>
  </div>
`;

const createWeatherDetail = (weather) => `
  <div class="container-detail">
    <div class="head">
      <h2>Sekarang anda berada di ${weather.description}</h2>
    </div>
    <div class="body">
  ${weather.parameter[6].timerange
    .map(
      (item) => `
    <p id="cuaca">Hari ini ${dateConverter(item.datetime)} cuacanya adalah ${weatherType(item.value[0].text)}</p>
  `,
    )
    .join('')}
</div>
  `;

export { createDashboard, createFormRegister, createWeatherDetail };
