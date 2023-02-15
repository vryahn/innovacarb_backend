const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, require: true, unique: false, trim: true },
  ownerName: { type: String, require: false, unique: false, trime: true },
  phone: { type: String, require: false, trim: true },
  adress: { type: String, require: true, trim: true },
  socialRed: { trype: String, require: false, trim: true },
  postalCode: { type: String, require: false, trim: true },
  kgaverage: { type: number, require: false, trim: true }
});

const model = mongoose.model("Coffeshop", schema);

module.exports = {
  schema,
  model,
};
