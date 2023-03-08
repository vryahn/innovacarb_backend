const Schedules = require("../../models/schedules").model;

const create = async (dateSchedules, statusSchedules, coffeshop) => {
  const schedules = new Schedules({ dateSchedules, statusSchedules, coffeshop });
  return await schedules.save();
};

const getAllSchedules = async () => await Schedules.find({});

const getOneSchedules = async (id) => await Schedules.findById(id);

const updateSchedules = async (dateSchedules, statusSchedules) => {
  return await Schedules.findByIdAndUpdate(id, { dateSchedules, statusSchedules });
};

const delSchedules = async (id) => {
  return await Schedules.findByIdAndDelete(id);
};

module.exports = {
  create,
  getAllSchedules,
  getOneSchedules,
  updateSchedules,
  delSchedules,
};
