const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, required: true, unique: true, trim: true },
  hash: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: false },
  lastName: { type: String, required: true, trim: false },
  coffeshop: [{ type: mongoose.ObjectId, ref: "Coffeshop" }],
  rol: { type: String, required: true, default: "customer", enum: { values: ["customer", "admin", "collector"] },},
  isActive: { type: Boolean, default: true }
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
