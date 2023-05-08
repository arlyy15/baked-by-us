const showBakedItems = async (req, res) => {
    const {
        db: { bakedGoods },
        params: { id },
    } = req;

    const bakeditems = await bakedGoods.find(id);
    if (!bakeditems) return res.sendStatus(404);

    res.send(bakeditems);
};

module.exports = showBakedItems;