import API_ENDPOINT from '../global/api-endpoint';

class Weather {
  static async listWeather() {
    const response = await fetch(API_ENDPOINT.WEATHER);

    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data;
    }
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  static async detailWeather(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data;
    }
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
}

export default Weather;
