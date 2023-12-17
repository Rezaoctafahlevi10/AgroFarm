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

export const makeNote = async (req, res) => {
  const {
    userId, tanaman, jumlah, tanggal,
  } = req.body;

  if (!userId || !tanaman || !jumlah || !tanggal) {
    return res.status(400).json({ msg: 'Semua field harus diisi' });
  }

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
    res.status(500).json({ msg: 'Terjadi kesalahan saat membuat catatan' });
  }
};
