const User = require("../../models/user").model;

const create = async (email, password) => {};
const update = async (id, password) => {};

const findByEmail = async (email) => await User.findOne({ email });

const authenticate = async (email, password) => {};

module.exports = {
  create,
  update,
  authenticate,
};
