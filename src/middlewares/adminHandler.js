const adminHandler = async (req, res, next) => {
  const { rol } = req.params.token;

  if (rol == "customer") {
    next();
  } else {
    res.status(401).json({ ok: false, message: "ups, no eres admin" });
  }
};

module.exports = { adminHandler };
