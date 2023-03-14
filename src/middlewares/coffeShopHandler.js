const User = require("../usecases/user");

const coffeShopeHandler = async (req, res, next) => {
  const { sub } = req.params.token; //sub contiene el id del usuario, para obtener el obj de la bd
  const cafeteria = req.params.id;

  const result = await User.getOneUser(sub);
  console.log("reultado cafeteria:",result);
  if (result.coffeshop.includes(cafeteria)) {
    next();
  } else {
    res.status(401).json({ ok: false, message: "ups, no es tu cafeteria" });
  }
};

module.exports = { coffeShopeHandler };
