const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, require: true, unique: true, trim: true },
  hash: { type: String, require: true, trim: true },
  firstName: { type: String, require: true, trim: true },
  lastName: { type: String, require: true, trim: true },
  coffeshop: [{type: mongoose.ObjectId, ref: "Coffeshop"}]
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
