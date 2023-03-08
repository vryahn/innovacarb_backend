const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  dateSchedules: { type: Date, require: false, unique: false },
  statusSchedules: { type: Boolean, default: false, require: false, unique: false },
  coffeshop:[{ type: mongoose.ObjectId, ref: "Coffeshop" }],
});

const model = mongoose.model("Schedules", schema);

module.exports = {
  schema,
  model,
};
