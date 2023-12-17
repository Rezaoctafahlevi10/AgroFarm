import weatherType from '../../utils/weather-type';
import dateConverter from '../../utils/date-converter';

const createDashboard = () => `
  <div class="container-list">
    <hero-element></hero-element>
    <deskripsi-web></deskripsi-web>
    <weather-prediction></weather-prediction>
    <pencatatan-element></pencatatan-element>
    <custom-artikel></custom-artikel>
  </div>
`;

const createArticleDetail = (article) => `    
  <div class="article"> 
    <h2>${article.judul}</h2>
    <div id="article-img">
      <img src="${article.gambar}" alt="${article.judul} Icon">
    </div>
    <p>${article.deskripsi.join('</p><p>')}</p>
    <time>${article.waktu}</time>
    <div class="location">Kota: ${article.kota}</div>
    <div class="source">Sumber: <a href="${article.sumber}" target="_blank">${article.sumber}</a></div>
  </div>
`;

const createArticle = (article) => `    
  <div class="article-list"> 
    <h2>${article.judul}</h2>
    <div id="article-img">
      <img src="${article.gambar}" alt="${article.judul} Icon">
    </div>
    <p>${article.deskripsi[0].slice(0, 90)}...<a href="#/artikel/${article.id}">Selengkapnya</a></p>
  </div>
`;

const createFormLogin = () => `
  <div class="logo">
    <img src="../../icons/icon-512x512.png" alt="">
  </div>
  <form class="form-login">
    <div class="form-group-login">
      <input type="email" id="email" class="form-control" placeholder="Email" />
    </div>
    <div class="form-group-login">
      <input type="password" id="password" class="form-control" placeholder="Password" />
    </div>
    <div class="form-group-login">
      <button id="buttonSave" type="button">Kirim</button>
    </div>
    <p>Don't Have an Account? <a href="/#/register">Sign Up</a></p>
  </form>
`;

const createNote = (notes) => `
  <section id="hasil-panen" class="hasil-panen">
    <h2>Pencatatan Hasil Panen</h2>
    <div class="hasil">
      <table id="customers">
        <tr>
          <th>Jenis Tanaman</th>
          <th>Jumlah Panen (Kg)</th>
          <th>Tanggal Panen</th>
        </tr>
        <tr>
          <td>
          ${notes.map((item) => `<ol>${item.tanaman}</ol>`).join('')}
          </td>
          <td>
          ${notes.map((item) => `<ol>${item.jumlah}</ol>`).join('')}
          </td>
          <td>
          ${notes.map((item) => `<ol>${item.tanggal.substring(8, 10)}-${item.tanggal.substring(5, 7)}-${item.tanggal.substring(0, 4)}</ol>`).join('')}
          </td>
        </tr>
      </table>
    </div>
    <p>Isi formulir di bawah ini untuk mencatat hasil panen Anda.</p>
    <div class="row">
      <form class="hasil-panen-form">
        <div class="input-group">
          <label for="tanggal-panen"><i data-feather="calendar"></i>Tanggal Panen</label>
          <input type="date" id="tanggal-panen" name="tanggal-panen" required />
        </div>
        <div class="input-group">
          <label for="jenis-tanaman"><i data-feather="list"></i>Jenis Tanaman</label>
          <input type="string" id="jenis-tanaman" name="jenis-tanaman" required />
        </div>
        <div class="input-group">
          <label for="jumlah-panen"><i data-feather="box"></i>Jumlah Panen (kg)</label>
          <input type="number" id="jumlah-panen" name="jumlah-panen" required />
        </div>
        <button id="saveNote" class="btn">Catat Hasil Panen</button>
      </form>
    </div>
  </section>
`;

const createFormRegister = () => `
  <div class="register-list">
    <div class="content">
    <img src="../../icons/icon-512x512.png" alt="">
      <h1>Ayo Majukan Pertanian <br> <span>Indo</span>nesia</h1>
    </div>
    <div class="form-register">
      <form class="form-register">
        <h2>Registrasi Akunmu</h2>
        <div class="form-group-register">
          <input type="text" id="username" class="form-control" placeholder="Username" required/>
        </div>
        <div class="form-group-register">
          <input type="email" id="email" class="form-control" placeholder="Email" required/>
        </div>
        <div class="form-group-register">
          <select name="provinsi" id="provinsi" required>
            <option value="" selected="selected">Pilih Provinsi</option>
          </select>
        </div>
        <div class="form-group-register">
          <select name="kota" id="kota" required>
            <option value="" selected="selected">Pilih Kota</option>
          </select>
        </div>
        <div class="form-group-register">
          <input type="password" id="password" class="form-control" placeholder="Password" required/>
        </div>
        <div class="form-group-register">
          <input type="password" id="confPassword" class="form-control" placeholder="Confirm Password" required/>
        </div>
        <div class="form-group-register">
          <button id="buttonSave" type="button">Register</button>
        </div>
      </form>
      <p>Already have account? <a href="/#/login">Log in</a></p>
    </div>
  </div>
`;

const createWeatherDetail = (weather) => `
  <div class="container-detail">
    <div class="head">
      <h1>Selamat datang di Prediksi Cuaca</h1>
      <h2>Berikut adalah ramalan cuaca di daerah ${weather.description}</h2>
    </div>
    <div class="body">
      ${weather.parameter[6].timerange
    .map((item) => {
      const weatherInfo = weatherType(item.value[0].text);
      return `
            <div id="cuaca">
              <p>
                Pada tanggal ${dateConverter(item.datetime)} cuacanya adalah ${weatherInfo.name}
                <img src="${weatherInfo.iconUrl}" alt="${weatherInfo.name} Icon">
              </p>
            </div>
          `;
    })
    .join('')}
    </div>
  </div>
`;

export default createWeatherDetail;

export {
  createDashboard,
  createFormRegister,
  createFormLogin,
  createWeatherDetail,
  createNote,
  createArticle,
  createArticleDetail,
};
