const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password, first, last },
  } = req;

  console.log(req.body)
  const user = await User.create(username, password, first, last);
  console.log(user)
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
