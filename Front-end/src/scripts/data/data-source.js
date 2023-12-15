import axios from 'axios';
import swal from 'sweetalert';
import { jwtDecode } from 'jwt-decode';
import API_ENDPOINT from '../global/api-endpoint';

class Weather {
  static async register(registerData) {
    try {
      const response = await axios.post(API_ENDPOINT.USERS, registerData);
      if (response.status === 200) {
        swal({
          title: 'Register Berhasil',
          text: 'Silahkan login ke akun anda',
        });
        window.location.href = '/#/login';
      }
    } catch (error) {
      swal({
        text: 'Mohon isi semua data',
      });
    }
  }

  static async login(loginData) {
    try {
      await axios.post(API_ENDPOINT.LOGIN, loginData, { withCredentials: true });
      swal({
        title: 'Login Berhasil',
      });
      window.location.href = '/#/';
    } catch (error) {
      swal({
        text: 'Mohon masukkan data dengan benar',
      });
    }
  }

  static async logout() {
    try {
      swal('Apakah anda ingin LogOut dari akun anda?', {
        buttons: {
          cancel: 'Tidak',
          catch: {
            text: 'Iya!',
            value: 'true',
          },
        },
      })
        .then((value) => {
          switch (value) {
            case 'true':
              axios.delete(API_ENDPOINT.LOGOUT, { withCredentials: true });
              swal('Berhasil LogOut!', 'Silahkan refresh halaman ini', 'success');
              break;

            default:
              swal('Tidak jadi logOut');
          }
        });
    } catch (error) {
      swal({
        text: 'Terjadi kesalahan pada website mohon coba lagi',
      });
    }
  }

  static async checkAuth() {
    try {
      const response = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      if (response.status === 200) {
        const navAuth = document.querySelector('.nav-auth');
        const navAuthHide = navAuth.querySelectorAll('.popup');

        navAuthHide.forEach((element) => {
          const hiddenAuth = element;
          hiddenAuth.style.display = 'none';
        });

        const navOut = document.querySelector('.logout');
        const navOutHide = navOut.querySelectorAll('.popup');

        navOutHide.forEach((element) => {
          const hiddenOut = element;
          hiddenOut.style.display = 'block';
        });
      }
    } catch (error) {
      const navOut = document.querySelector('.logout');
      const navOutHide = navOut.querySelectorAll('.popup');

      navOutHide.forEach((element) => {
        const hiddenOut = element;
        hiddenOut.style.display = 'none';
      });

      const navAuth = document.querySelector('.nav-auth');
      const navAuthHide = navAuth.querySelectorAll('.popup');

      navAuthHide.forEach((element) => {
        const hiddenAuth = element;
        hiddenAuth.style.display = 'inline-block';
      });
    }
  }

  static async detailWeather(getUserKota) {
    try {
      const responseToken = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      const decoded = jwtDecode(responseToken.data.accessToken);
      const getUserProvinces = decoded.provinsi;
      await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });

      const response = await axios.get(API_ENDPOINT.DETAIL(getUserProvinces));

      if (response.status === 200) {
        const { data } = response.data;
        data.forecast.area.map((areaItem) => areaItem.description);

        return data.forecast.area[getUserKota];
      }
      throw new Error('Failed to fetch data');
    } catch (error) {
      if (error.response) {
        swal({
          text: 'Harap login terlebih dahulu untuk menggunakan fitur ini',
        });
        window.location.href = '/#/login';
      }
      return null;
    }
  }

  static async checkMiddleware() {
    try {
      const responseToken = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });

      if (responseToken) {
        return null;
      }

      throw new Error('Failed to fetch data');
    } catch (error) {
      if (error.response) {
        swal({
          text: 'Harap login terlebih dahulu untuk menggunakan fitur ini',
        });
        window.location.href = '/#/login';
      }
      return null;
    }
  }

  static async listNote() {
    try {
      const responseToken = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      const decoded = jwtDecode(responseToken.data.accessToken);
      const getUserId = decoded.userId;

      if (responseToken.status === 200) {
        const response = await axios.get(API_ENDPOINT.NOTE);
        const filteredData = response.data.filter((item) => item.userId === getUserId);
        return filteredData;
      }
      return null;
    } catch (error) {
      if (error.response) {
        swal({
          title: 'Catatan tidak bisa di muat',
          text: 'Harap login terlebih dahulu untuk menggunakan fitur ini',
        });
        window.location.href = '/#/login';
      }
      return null;
    }
  }

  static async makeNote(noteData) {
    try {
      const response = await axios.post(API_ENDPOINT.NOTE, noteData);
      if (response.status === 200) {
        swal('Pencatatan Berhasil!', 'success');
      }
    } catch (error) {
      swal({
        text: 'Mohon isi semua data',
      });
    }
  }

  static async listArticle() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);

      if (response.status === 200) {
        return response.data.artikel;
      }
      swal({
        title: 'Artikel tidak bisa di muat',
        text: 'Pastikan jaringan anda tidak bermasalah',
      });
      return null;
    } catch (error) {
      if (error.response) {
        swal({
          title: 'Artikel tidak bisa di muat',
          text: 'Pastikan jaringan anda tidak bermasalah',
        });
      }
      return null;
    }
  }

  static async detailArticle(id) {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);

      if (response.status === 200) {
        return response.data.artikel[id];
      }
      swal({
        title: 'Artikel tidak bisa di muat',
        text: 'Pastikan jaringan anda tidak bermasalah',
      });
      return null;
    } catch (error) {
      if (error.response) {
        swal({
          title: 'Artikel tidak bisa di muat',
          text: 'Pastikan jaringan anda tidak bermasalah',
        });
      }
      return null;
    }
  }
}

export default Weather;
