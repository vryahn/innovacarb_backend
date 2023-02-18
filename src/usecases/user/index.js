const User = require("../../models/user").model;
const createCoffeshope = require("../coffeShop").create;
const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const { createToken, verifyToken } = require("../../lib/jwt");

const create = async (email, password) => {
  const hash = await hashPassword(password);

  const user = new User({ email, hash });

  return await user.save();
};

const update = async (id, email, password) => {
  const hash = await hashPassword(password);

  return await User.findByIdAndUpdate(id, { email, hash });
};

const findByEmail = async (email) => await User.findOne({ email });

const authenticate = async (email, password) => {
  const user = await findByEmail(email);
  const hash = user.hash;

  const isVerified = await verifyPassword(password, hash);
  if (!isVerified)
    throw new Error("Ups, tu pass esta mal, intentalo nuevamente");
  return createToken({ sub: user._id });
};

const addCoffeShop = async (id, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage)=>{
  const datosUsuario= await User.findById(id)
  const coffeshop = datosUsuario.coffeshop
  console.log(datosUsuario)//no olvides quietar esto!!!!
  const createCoffeShope = await createCoffeshope(nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage)
  coffeshop.push(createCoffeShope._id);
  return await datosUsuario.save();
}

const delCoffeshop = async (id)=>{

}

module.exports = {
  create,
  update,
  authenticate,
  addCoffeShop
};
