
const authRoutes = require('..//'); 
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const express = require('express');
// const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agrofarm',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});
// Hash the password
// const hashedPassword = await bcrypt.hash(password, 10);

// Registration
app.post('/register', async (req, res) => {
  const {
    username, email, password, provinsi, kota,
  } = req.body;

  // Check for empty values
  if (!username || !email || !password || !provinsi || !kota) {
    res.send('Please provide all required information');
    return;
  }

  // Insert user into the database
  db.query(
    'INSERT INTO users (username, email, password, provinsi, kota) VALUES (?, ?, ?, ?, ?)',
    [username, email, password, provinsi, kota],
    (err, result) => {
      if (err) {
        console.error('Error registering user:', err); // Log the error details
        res.send('Error registering user');
      } else {
        console.log('User registered successfully');
        res.send('User registered successfully');
      }
    },
  );
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
    if (err) {
      console.error('Error retrieving user:', err);
      res.send('Error retrieving user');
    } else if (result.length > 0) {
      // Compare the entered password with the hashed password in the database
      const match = await bcrypt.compare(password, result[0].password);
      if (match) {
        req.session.user = result;
        res.send('Login successful');
      } else {
        res.send('Incorrect password');
      }
    } else {
      res.send('User not found');
    }
  });
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});//bingung routingnya 