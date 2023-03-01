const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, require: true, unique: true, trim: true },
  hash: { type: String, require: true, trim: true },
  firstName: { type: String, requier: false, trim: false },
  lastName: { type: String, requier: false, trim: false },
  coffeshop: [{ type: mongoose.ObjectId, ref: "Coffeshop" }],
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
