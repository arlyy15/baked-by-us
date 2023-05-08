const { isAuthorized } = require('../../utils/auth-utils');

const updatedbakedItem = async (req, res) => {
  const {
    session,
    db: { bakedGoods },
    params: { id },
    body: { caption, url, price },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const bakedItem = await bakedGoods.find(id);
  if (!bakedItem) return res.sendStatus(404);

  const updatedBakedItem = await bakedItem.update(caption, url, price);
  res.send(updatedBakedItem);
};

module.exports = updatedbakedItem;