const weatherType = (value) => {
  switch (value) {
    case '0':
      return 'Cerah';
    case '1':
      return 'Cerah Berawan';
    case '2':
      return 'Cerah Berawan';
    case '3':
      return 'Berawan';
    case '4':
      return 'Berawan Tebal';
    case '5':
      return 'Udara Kabur';
    case '10':
      return 'Asap';
    case '45':
      return 'Kabut';
    case '60':
      return 'Hujan Ringan';
    case '61':
      return 'Hujan Sedang';
    case '63':
      return 'Hujan Lebat';
    case '80':
      return 'Hujan Lokal';
    case '95':
      return 'Hujan Petir';
    case '97':
      return 'Hujan Petir';
    default:
      return value;
  }
};

export default weatherType;
