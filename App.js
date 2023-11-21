const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
// const dotenv = require('dotenv');
const path = require('path');

const app = express();

// koneksi mysql
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root', // process.env.USER (error)
  password: '',
  database: 'agrofarm',
});
koneksi.connect((error) => {
  if (error) {
    console.log('error');
  } else {
    console.log('sukses');
  }
});
// midellware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// const public_direcotry = path.join(__dirname,'/style.css');
// app.use(express.static(public_direcotry));

// menset vie egine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'View'));

app.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  // const Nama = req.body.Nama
  if (email && password) {
    koneksi.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
      if (results.length > 0 && results.length <= 15) {
        req.session.loggedin = true;
        req.session.email = email;
        // req.session.Nama = Nama;
        // req.session.Nama = results[0].Nama;
        res.redirect('/home');
      } else {
        res.send('Email dan password tidak sesuai');
      }
      res.end();
    });
  } else {
    res.send('Please enter Email  and Password!');
    res.end();
  }
});

// prediksi cuaca (masih bingung cara mengakses API nya)
// app.get('/cuaca', (req, res) => {
//   const { latitude, longitude } = req.query;

//   if (!latitude || !longitude) {
//     return res.status(400).json({ error: 'Latitude dan Longitude diperlukan' });
//   } //mengakses lokasi terkini

//   const apiKey = 'https://weather-api-tau-six.vercel.app/api-docs/';
//   const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
//   request(apiUrl, (error, response, body) => {
//     if (error) {
//       return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data cuaca' });
//     }
//     const weatherData = JSON.parse(body);
//     const prediksiCuaca = {
//       temperature: weatherData.main.temp,
//       description: weatherData.weather[0].description,
//     };
//     if (isCuacaPanas(prediksiCuaca)) {
//       prediksiCuaca.rekomendasi = 'Cuaca panas, disarankan untuk menyiram tanaman.';
//     } else {
//       prediksiCuaca.rekomendasi = 'Cuaca tidak terlalu panas, tetap awasi kondisi tanaman Anda.';
//     }
//     res.render('prediksiCuaca', { prediksiCuaca });
//   });
// });

// function isCuacaPanas(dataCuaca) {
//   return dataCuaca.temperature > 30 && dataCuaca.description.includes('clear');
// }//misal disini suhunya panas > 30 maka akan di clear

// register

// Artikel
app.get('/artikel', (req, res) => {
  const sql = 'SELECT * FROM artikel';
  koneksi.query(sql, (err, results) => {
    if (err) throw err;
    res.render('artikel', { results });
  });
});
// app.get('/delete/:Id_artikel', (req, res) => {
//   let sql = `DELETE FROM artikel WHERE Id_artikel = ${req.params.Id_artikel}`;
//   console.log(sql)
//   db.query(sql, (err) => {
//     if (err) throw err;
//     res.redirect('/home');
//   });
// }); not progres

app.get('/tambahArtikel', (req, res) => {
  res.render('tambah_artikel');
});
app.post('/add', (req, res) => {
  const data = { Judul: req.body.Judul, Konten: req.body.Konten, penulis: req.body.penulis };
  const sql = 'INSERT INTO artikel SET ?';
  const query = koneksi.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/artikel');
  });
});
app.get('/EditArtikel', (req, res) => {
  res.render('edit_artikel');
});
// definisi router
app.use('/', require('./Router/Page.js')); // halaman dashboard
app.use('/home', require('./Router/Page.js'));
// app.use('/cuaca',require("./Router/Page.js"));

// menjalankan program
app.listen(3000, () => {
  console.log('Koneksi berhasil');
});
