const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, require: true, unique: true, trim: true },
  hash: { type: String, require: true, trim: true },
  firstName: { type: String, require: true, trim: true },
  lastName: { type: String, require: true, trim: true },
  contactInformation: { 
    phone: { type: String, require: false, trim: true },
  }
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
