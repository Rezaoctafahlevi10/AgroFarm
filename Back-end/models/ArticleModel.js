import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Article = db.define('article', {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
});

export default Article;
