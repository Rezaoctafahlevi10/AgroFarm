import axios from 'axios';
import swal from 'sweetalert';
import { jwtDecode } from 'jwt-decode';
import API_ENDPOINT from '../global/api-endpoint';

class Weather {
  static async register(registerData) {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };

    try {
      const response = await axios.post(API_ENDPOINT.USERS, registerData);
      console.log(response.data);
      window.location.href = '/#/login';
    } catch (error) {
      showResponseMessage(error);
    }
  }

  static async login(loginData) {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };

    try {
      await axios.post(API_ENDPOINT.LOGIN, loginData, { withCredentials: true });
    } catch (error) {
      showResponseMessage(error);
    }
  }

  static async checkAuth() {
    try {
      await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
    } catch (error) {
      if (error.response) {
        swal({
          text: 'Harap login terlebih dahulu!',
        });
        window.location.href = '/#/login';
      }
    }
  }

  static async detailWeather() {
    try {
      await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });

      const response = await axios.get(API_ENDPOINT.DETAIL);

      if (response.status === 200) {
        const { data } = response.data;
        const descriptionsArray = data.forecast.area.map((areaItem) => areaItem.description);
        console.log('Descriptions array:', descriptionsArray);

        return data.forecast.area[0];
      }
      throw new Error('Failed to fetch data');
    } catch (error) {
      if (error.response) {
        swal({
          text: 'Harap login terlebih dahulu!',
        });
        window.location.href = '/#/login';
      }

      // Return null or undefined if there is no data
      return null;
    }
  }

  static async listArticle() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);

      if (response.status === 200) {
        return response.data;
      }

      throw new Error(`Failed to fetch data: ${response.status}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
        throw new Error('Failed to fetch data. Please check your internet connection.');
      } else {
        console.error('Non-Axios error:', error.message);
        throw new Error('Failed to fetch data. Please try again later.');
      }
    }
  }
}

export default Weather;
