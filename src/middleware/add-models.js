const User = require('../db/models/user');
const BakedGoods = require('../db/models/bakedgoods');

const addModels = (req, res, next) => {
  req.db = {
    User,
    BakedGoods,

  };
  next();
};

module.exports = addModels;
