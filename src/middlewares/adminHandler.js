const User = require("../usecases/user");

const adminHandler = async (req, res, next) => {
  const { rol } = req.params.token; //sub contiene el id del usuario, para obtener el obj de la bd

  if (rol == "customer") {
  
    next();
  } else {
    res.status(401).json({ ok: false, message: "ups, no eres admin" });
  }
};

module.exports = { adminHandler };
