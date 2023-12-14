import Pencatatan from '../models/PencatatanModel.js';

export const getNote = async (_req, res) => {
  try {
    const note = await Pencatatan.findAll({
      attributes: ['id', 'userId', 'tanaman', 'jumlah', 'tanggal'],
    });
    res.json(note);
  } catch (error) {
    console.log(error);
  }
};

export const makeNote = async (_req, res) => {
  const {
    userId, tanaman, jumlah, tanggal,
  } = _req.body;
  try {
    await Pencatatan.create({
      userId,
      tanaman,
      jumlah,
      tanggal,
    });
    res.json({ msg: 'Pencatatan Berhasil' });
  } catch (error) {
    console.log(error);
  }
};
