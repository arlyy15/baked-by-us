const showOtherItems = async (req, res) => {
    const {
        db: { Other },
        params: { id },
    } = req;

    const otheritems = await Other.find(id);
    if (!otheritems) return res.sendStatus(404);

    res.send(otheritems);
};

module.exports = showOtherItems;