const DeleteOtherItem = (req, res) => {
    req.session = null;
    res.sendStatus(204);
  };
  
  module.exports = DeleteOtherItem;