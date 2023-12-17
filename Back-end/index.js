import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import Users from './models/UserModel.js';
import Pencatatan from './models/PencatatanModel.js';
import router from './routes/routes.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('database connected');
  await Users.sync();
  await Pencatatan.sync();
} catch (error) {
  console.error(error);
}

const allowedOrigins = ['http://localhost:9000', 'https://udondondodonagrofarm.netlify.app'];

app.use(cors({ credentials: true, origin: allowedOrigins }));

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('server running at port 3000'));
