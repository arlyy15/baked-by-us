const listBakeditems = async (req, res) => {
    const { bakedGoods } = req.db;
    const bakeditems = await bakedGoods.list();
    res.send(bakeditems);
  };
  
  module.exports = listBakeditems;