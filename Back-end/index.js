import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
// import Users from './models/UserModel.js'; // Hilangkan command kalau pertama kali dijalankan
// import Article from './models/ArticleModel.js'; // Hilangkan command kalau pertama kali dijalankan
import router from './routes/routes.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('database connected');
  // await Users.sync(); // Hilangkan command kalau pertama kali dijalankan
  // await Article.sync(); // Hilangkan command kalau pertama kali dijalankan
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:9000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('server running at port 3000'));
