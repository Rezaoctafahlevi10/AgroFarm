/* eslint-disable no-unused-vars */
import { Sequelize } from 'sequelize';

const db = new Sequelize('agrofarm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
