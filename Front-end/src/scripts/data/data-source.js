import axios from 'axios';
import swal from 'sweetalert';
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

  static async checkAuth() {
    try {
      const response = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      if (response.status === 200) {
        const navAuth = document.querySelector('.nav-auth');
        const elementsToHide = navAuth.querySelectorAll('.popup-login, .popup-register');

        elementsToHide.forEach((element) => {
          const hiddenElement = element;
          hiddenElement.style.display = 'none';
        });
      }
    } catch (error) {
      /* empty */
    }
  }

  static async detailWeather() {
    try {
      await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });

      const response = await axios.get(API_ENDPOINT.DETAIL);

      if (response.status === 200) {
        const { data } = response.data;
        data.forecast.area.map((areaItem) => areaItem.description);

        return data.forecast.area[0];
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

  static async listArticle() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);

      if (response.status === 200) {
        return response.data;
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
