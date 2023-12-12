const weatherType = (value) => {
  switch (value) {
    case '0':
      return {
        name: 'Cerah',
        iconUrl: 'https://www.svgrepo.com/show/279157/sun-season.svg',
      };
    case '1':
    case '2':
      return {
        name: 'Cerah Berawan',
        iconUrl: 'https://www.svgrepo.com/show/279147/cloudy-forecast.svg',
      };
    case '3':
      return {
        name: 'Berawan',
        iconUrl: 'https://www.svgrepo.com/show/279139/cloud-spring.svg',
      };
    case '4':
      return {
        name: 'Berawan Tebal',
        iconUrl: 'https://www.svgrepo.com/show/279148/snowing-forecast.svg',
      };
    case '5':
      return {
        name: 'Udara Kabur',
        iconUrl: 'https://www.svgrepo.com/show/279155/tornado-forecast.svg',
      };
    case '10':
      return {
        name: 'Asap',
        iconUrl: 'https://www.svgrepo.com/show/405681/fog.svg',
      };
    case '45':
      return {
        name: 'Kabut',
        iconUrl: 'https://www.svgrepo.com/show/528258/fog.svg',
      };
    case '60':
      return {
        name: 'Hujan Ringan',
        iconUrl: 'https://www.svgrepo.com/show/279146/rain-forecast.svg',
      };
    case '61':
      return {
        name: 'Hujan Sedang',
        iconUrl: 'https://www.svgrepo.com/show/279144/rain-forecast.svg',
      };
    case '63':
      return {
        name: 'Hujan Lebat',
        iconUrl: 'https://www.svgrepo.com/show/279150/storm.svg',
      };
    case '80':
      return {
        name: 'Hujan Lokal',
        iconUrl: 'https://www.svgrepo.com/show/279140/rain-forecast.svg',
      };
    case '95':
    case '97':
      return {
        name: 'Hujan Petir',
        iconUrl: 'https://www.svgrepo.com/show/279150/storm.svg',
      };
    default:
      return {
      };
  }
};

export default weatherType;
