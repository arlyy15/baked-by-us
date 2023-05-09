const create = async (req, res) => {
    const {
        session,
        db: { BakedGoods },
        body: { caption, url, price, user_Id },
    } = req;

    console.log(req.body)
    const bakeditems = await BakedGoods.create(caption, url, price, session.userId);
    console.log(bakeditems)

    res.send(bakeditems);
};

module.exports = create;
