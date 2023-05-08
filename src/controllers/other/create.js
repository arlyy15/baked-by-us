const create = async (req, res) => {
    const {
      session,
      db: { Other },
      body: { id,comment,rating },
    } = req;
  
    console.log(req.body)
    const otherItems = await other.create(id,comment,rating,user_id);
    console.log(other)
    
  
    res.send(otherItems);
  };
  
  module.exports = create;