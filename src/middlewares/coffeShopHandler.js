const coffeShopeHandler = async (req, res, next) => {
  const { sub } = req.params.token;
  try {
    
    next();
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
};

module.exports = { coffeShopeHandler };
