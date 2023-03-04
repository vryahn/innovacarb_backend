const collectorHandler = async (req, res, next) => {
  const { rol } = req.params.token;

  if (rol == "collector") {
    next();
  } else {
    res.status(401).json({ ok: false, message: "ups, no eres recolector" });
  }
};

module.exports = { collectorHandler };
