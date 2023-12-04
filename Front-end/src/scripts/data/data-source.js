import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class Weather {
  static async register(registerData) {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };

    try {
      const response = await axios.post('http://localhost:3000/users', registerData);
      console.log(response.data);
    } catch (error) {
      showResponseMessage.error('Error:', error);
    }
  }

  static async listWeather() {
    const response = await fetch(API_ENDPOINT.WEATHER);

    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data;
    }
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  static async detailWeather() {
    const response = await fetch(API_ENDPOINT.DETAIL);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data.forecast.area[1];
    }
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
}

export default Weather;
