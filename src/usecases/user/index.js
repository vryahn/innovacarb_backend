const User = require("../../models/user").model;
const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const { createToken, verifyToken } = require("../../lib/jwt");

const create = async (email, password) => {
  const hash = await hashPassword(password);

  const user = new User({ email, hash });

  return await user.save();
};

const update = async (id, password) => {};

const findByEmail = async (email) => await User.findOne({ email });

const authenticate = async (email, password) => {
  const user = await findByEmail(email);
  const hash = user.hash;

  const isVerified = await verifyPassword(password, hash);
  if (!isVerified)
    throw new Error("Ups, tu pass esta mal, intentalo nuevamente");
  return createToken({ sub: user._id });
};

module.exports = {
  create,
  update,
  authenticate,
};
