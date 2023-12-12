const dateConverter = (datetime) => {
  const year = datetime.slice(0, 4);
  const month = datetime.slice(4, 6);
  const day = datetime.slice(6, 8);
  const hour = datetime.slice(8, 10);
  const minute = datetime.slice(10, 12);

  return `${day}/${month}/${year} ${hour}:${minute}`;
};

export default dateConverter;
