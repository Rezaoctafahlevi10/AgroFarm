/* eslint-disable max-len */
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
const createFormLogin = () => `
  <h2>AGROFARM</h2>
  <div class="form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" class="form-control" placeholder="Masukkan emailmu disini" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" class="form-control" placeholder="Masukkan passwordmu disini" />
      </div>
      <div class="form-group">
        <button id="buttonSave" type="button">Kirim</button>
      </div>
    </div>
  </div>
`;

const createFormRegister = (data) => `
  <div class="container-list">
    <h2>Registrasi Akunmu</h2>
    <div class="form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" class="form-control" placeholder="Masukkan usernamemu disini" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" class="form-control" placeholder="Masukkan emailmu disini" />
      </div>
      <div class="form-group">
        <label for="provinsi">Provinsi:</label>
        <select name="provinsi" id="provinsi">
          <option value="" selected="selected">Pilih Provinsi</option>
        </select>
      </div>
      <div class="form-group">
        <label for="kota">Kota:</label>
        <select name="kota" id="kota">
          <option value="" selected="selected">Pilih Kota</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" class="form-control" placeholder="Masukkan passwordmu disini" />
      </div>
      <div class="form-group">
        <label for="confPassword">Confirm Password:</label>
        <input type="password" id="confPassword" class="form-control" placeholder="Masukkan passwordmu disini" />
      </div>
      <div class="form-group">
        <button id="buttonSave" type="button">Kirim</button>
      </div>
    </div>
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

export {
  createDashboard, createFormRegister, createFormLogin, createWeatherDetail,
};
