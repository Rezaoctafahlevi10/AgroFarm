import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Pencatatan = db.define('pencatatan', {
  userId: {
    type: DataTypes.INTEGER,
  },
  tanaman: {
    type: DataTypes.STRING,
  },
  jumlah: {
    type: DataTypes.FLOAT,
  },
  tanggal: {
    type: DataTypes.DATE,
  },
}, {
  freezeTableName: true,
});

export default Pencatatan;
