import Article from '../models/PencatatanModel.js';

export const getNote = async (_req, res) => {
  try {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'content'],
    });
    res.json(articles);
  } catch (error) {
    console.log(error);
  }
};

export const makeNote = async (_req, res) => {
  const {
    userId, tanaman, jumlah, tanggal,
  } = _req.body;
  try {
    await Article.create({
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
