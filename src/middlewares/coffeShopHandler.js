const User=require("../models/user").model;

const coffeShopeHandler = async (req, res, next) => {

  const { sub } = req.params.token; //sub contiene el id del usuario, para obtener el obj de la bd
  const cafeteria=req.params.id
  try {
    const result = User.findById(sub);
    if(result.coffeshop.includes(cafeteria)){
    next();
    }
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
};

module.exports = { coffeShopeHandler };
