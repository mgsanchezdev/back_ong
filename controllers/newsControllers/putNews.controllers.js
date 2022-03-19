const { NEWS_UPDATE, NEWS_ID_ERROR } = require("../../const/const");

const News = require("../../modelsConections/entriesModelConection");

const PUTNews = async (req, res) => {
  const { id } = req.params;

  try {  
    await News.update(req.body, { where: { id } });
    return res.status(200).json({ message: NEWS_UPDATE });
  } catch {
    return res.status(404).json({ error: NEWS_ID_ERROR });
  }
};

exports.PUTNews = PUTNews;
