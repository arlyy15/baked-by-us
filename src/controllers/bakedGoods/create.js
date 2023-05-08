const create = async (req, res) => {
    const {
        session,
        db: { bakedGoods },
        body: { id, caption, url, price },
    } = req;

    console.log(req.body)
    const bakeditems = await bakedGoods.create(id, caption, url, price, session.userId);
    console.log(bakedGoods)

    res.send(bakeditems);
};

module.exports = create;
