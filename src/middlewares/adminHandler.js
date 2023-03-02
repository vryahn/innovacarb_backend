const User = require("../usecases/user");

const adminHandler = async (req, res, next) => {
  const { sub, rol } = req.params.token; //sub contiene el id del usuario, para obtener el obj de la bd

  const result = await User.getOneUser(sub);
  if (result.rol == rol && result.rol == "admin") {
    console.log("resultado: ", result);
    next();
  } else {
    res.status(401).json({ ok: false, message: "ups, no eres admin" });
  }
};

module.exports = { adminHandler };
