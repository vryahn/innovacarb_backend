const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  dateSchedules: { type: Date, require: false, unique: false },
  statusSchedules: { type: Boolean, require: false, unique: false },
});

const model = mongoose.model("Schedules", schema);

module.exports = {
  schema,
  model,
};
