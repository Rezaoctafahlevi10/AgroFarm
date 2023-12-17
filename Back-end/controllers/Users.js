import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../models/UserModel.js';

export const getUsers = async (_req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'username', 'email'],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const {
    username, email, provinsi, kota, password, confPassword,
  } = req.body;

  if (!username || !email || !provinsi || !kota || !password || !confPassword) {
    return res.status(400).json({ msg: 'Semua field harus diisi' });
  }

  if (password !== confPassword) return res.status(400).json({ msg: 'password tidak sama' });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      username,
      email,
      provinsi,
      kota,
      password: hashPassword,
    });
    res.json({ msg: 'Register Berhasil' });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'Data yang dimasukkan salah!!' });
    const userId = user[0].id;
    const { username } = user[0];
    const { email } = user[0];
    const { provinsi } = user[0];
    const { kota } = user[0];
    const accessToken = jwt.sign({
      userId, username, email, provinsi, kota,
    }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s',
    });
    const refreshToken = jwt.sign({
      userId, username, email, provinsi, kota,
    }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });
    await Users.update({ refresh_token: refreshToken }, {
      where: {
        id: userId,
      },
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: 'None',
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'Data yang dimasukkan salah' });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({ refresh_token: null }, {
    where: {
      id: userId,
    },
  });
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};
