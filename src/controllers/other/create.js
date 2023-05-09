const create = async (req, res) => {
  const {
    session,
    db: { Other },
    body: { id, comment, rating, user_id },
  } = req;

  console.log(req.body)
  const otherItems = await Other.create(id, comment, rating, user_id);
  console.log(otherItems)


  res.send(otherItems);
};

module.exports = create;