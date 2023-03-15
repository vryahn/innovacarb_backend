const User = require("../../models/user").model;
const createCoffeshope = require("../coffeShop").create;
const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const { createToken, verifyToken } = require("../../lib/jwt");

const create = async (email, password, firstName, lastName, rol, isActive) => {
  const hash = await hashPassword(password);

  const user = new User({ email, hash, firstName, lastName, rol, isActive});

  return await user.save();
};

const update = async (id, email, password, firstName, lastName) => {

  return await User.findByIdAndUpdate(id, { email, password, firstName, lastName });
};

const findByEmail = async (email) => await User.findOne({ email });

const authenticate = async (email, password) => {
  const user = await findByEmail(email);
  const hash = user.hash;

  const isVerified = await verifyPassword(password, hash);
  if (!isVerified)
    throw new Error("Ups, tu pass esta mal, intentalo nuevamente");
  return createToken({ sub: user._id, rol: user.rol });
};

const addCoffeShop = async (id, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage)=>{
  const datosUsuario= await User.findById(id);
  const coffeshop = datosUsuario.coffeshop;
  const createCoffeShope = await createCoffeshope(nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage)
  coffeshop.push(createCoffeShope._id);
  return await datosUsuario.save();
}

const getAllUsers = async () => await User.find({}).exec();

const getOneUser = async (id) => await User.findById(id).populate("coffeshop").exec();

const inactiveUser = async (id)=> {
  
  const dataUser = await User.findByIdAndUpdate(id);
  dataUser.isActive = false;
  return await dataUser.save();
}

module.exports = {
  create,
  update,
  authenticate,
  addCoffeShop,
  getAllUsers,
  getOneUser,
  inactiveUser
};
