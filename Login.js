const koneksi = mysql.createConnection({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root', //process.env.USER (error)
    password: '',
    database: 'agrofarm'
  })
  koneksi.connect((error)=>{
    if(error){
      console.log('error')
    }
    else {
      console.log('sukses')
    }
  })
  //midellware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
  
  // const public_direcotry = path.join(__dirname,'/style.css');
  // app.use(express.static(public_direcotry));
  
  //menset vie egine 
//   app.set('view engine','hbs');
  app.set('views', path.join(__dirname, 'View')); 
  app.post('/login',(req,res)=>{
    const email =  req.body.email
    const password = req.body.password
    // const Nama = req.body.Nama
    if (email && password) {
        koneksi.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
          if (results.length > 0 && results.length <=15) {
            req.session.loggedin = true;
            req.session.email = email;
            // req.session.Nama = Nama;
            // req.session.Nama = results[0].Nama;
            res.redirect('/home');
          } else {
            res.send('Email dan password tidak sesuai');
          }
          res.end();
        });
=======
  host: 'localhost',
  user: 'root', // process.env.USER (error)
  password: '',
  database: 'agrofarm',
});
koneksi.connect((error) => {
  if (error) {
    console.log('error');
  } else {
    console.log('sukses');
  }
});
// midellware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// const public_direcotry = path.join(__dirname,'/style.css');
// app.use(express.static(public_direcotry));

// menset vie egine
//   app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'View'));

app.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  // const Nama = req.body.Nama
  if (email && password) {
    koneksi.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
      if (results.length > 0 && results.length <= 15) {
        req.session.loggedin = true;
        req.session.email = email;
        // req.session.Nama = Nama;
        // req.session.Nama = results[0].Nama;
        res.redirect('/home');
>>>>>>> e3e76662da74ec8b573d1c87a0055250ebd4086b
      } else {
        res.send('Email dan password tidak sesuai');
      }
      res.end();
    });
  } else {
    res.send('Please enter Email  and Password!');
    res.end();
  }
});
