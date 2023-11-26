const authRoutes = require('..//'); // Sesuaikan dengan path yang benar
const app = express();
const PORT = process.env.PORT || 9000;
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});//bingung routingnya 