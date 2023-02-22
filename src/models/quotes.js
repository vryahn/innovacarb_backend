const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  dateQuote: { type: Date, require: false, unique: false},
  statusQuote: {type: Boolean, require: false, unique: false}
});

const model = mongoose.model("Quotes", schema);

module.exports = {
  schema,
  model,
};
