const db = require("../models/user");
const config = require("../config/auth.config");
const User = db.User;

const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//proses daftar 
exports.signup = (req, res) => {
  User.create({ //menyimpan ke db 
    nama: req.body.nama,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  })
    .then((user) => {
      res.send({ message: "registrasi berhasil" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email, 
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                expiresIn: 86400, // 24 hours
                              });

      res.status(200).send({
        id: user.id,
        nama: user.nama, 
        email: user.email, 
        password : user.password,
        accessToken: token
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
