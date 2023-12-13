import express from 'express';
import {
  getUsers, Register, Login, Logout,
} from '../controllers/Users.js';
import { getNote, makeNote } from '../controllers/Pencatatan.js';
import verifyToken from '../middleware/verifyToken.js';
import RefreshToken from '../controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', RefreshToken);
router.delete('/logout', Logout);
router.get('/note', getNote);
router.post('/note', makeNote);

export default router;
