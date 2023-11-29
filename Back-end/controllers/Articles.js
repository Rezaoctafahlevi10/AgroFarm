import Article from '../models/ArticleModel.js';

export const getArticle = async (_req, res) => {
  try {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'content'],
    });
    res.json(articles);
  } catch (error) {
    console.log(error);
  }
};

export const makeArticle = async (_req, res) => {
  const {
    title, content
  } = _req.body
  try {
    await Article.create({
      title,
      content,
    });
    res.json({ msg: 'Pembuatan Artikel Berhasil' });
  } catch (error) {
    console.log(error);
  }
};