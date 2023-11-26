import API_ENDPOINT from '../global/api-endpoint';

class Weather {
  static async regiasterUser(registerData) {
    try {
      await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      console.log('User registration request sent successfully');
    } catch (err) {
      console.error('Error sending registration request:', err);
    }
  }

  static async registerUser(registerData) {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const responseJson = await response.json();
      showResponseMessage(responseJson.message);

      if (responseJson.status === 'success') {
        return true;
      }
      return false;
    } catch (error) {
      showResponseMessage('Error registering user');
      console.error('Error:', error);
      return false;
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
      return responseJson.data.forecast.area[3];
    }
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
}

export default Weather;
