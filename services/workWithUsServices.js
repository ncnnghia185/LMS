const Work = require("../models/workWithUsModel");

// Create Details
const postDetails = async (data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing required data to create");
  const detail = await Work.create(data);
  return detail;
};

// Update details
const putDetail = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing required data to update");
  const detail = await Work.findByIdAndUpdate(id, data, { new: true });
  return detail;
};
// Delete detail
const deleteDetail = async (id) => {
  const detail = await Work.findByIdAndDelete(id);
  return detail;
};

// Get one detail
const getDetail = async (id) => {
  const detail = await Work.findById(id);
  if (!detail) throw new Error("Not found this detail");
  return detail;
};

// Get all details
const getDetails = async () => {
  const details = await Work.find();
  return details;
};
module.exports = {
  postDetails,
  putDetail,
  deleteDetail,
  getDetail,
  getDetails,
};
