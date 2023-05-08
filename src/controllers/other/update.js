const { isAuthorized } = require('../../utils/auth-utils');

const updatedOtherItem = async (req, res) => {
  const {
    session,
    db: { Other },
    params: { id },
    body: { comment,rating },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const otherItem = await Other.find(id);
  if (!otherItem) return res.sendStatus(404);

  const updatedOtherItem = await OtherItem.update(comment,rating);
  res.send(updatedOtherItem);
};

module.exports = updatedOtherItem;