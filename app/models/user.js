module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};