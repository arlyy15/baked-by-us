const listOtheritems = async (req, res) => {
    const { Other } = req.db;
    const otheritems = await Other.list();
    res.send(otheritems);
  };
  
  module.exports = listOtheritems;