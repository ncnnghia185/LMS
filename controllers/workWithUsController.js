const workServices = require("../services/workWithUsServices");

// Create details
const createDetails = async (req, res) => {
  try {
    const detail = await workServices.postDetails(req.body);
    return res.status(200).json({
      success: true,
      message: "Create details successfully",
      data: detail,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create details",
      error: error.message,
    });
  }
};
// Get a work with us
const getWorkWithUs = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await workServices.getDetail(id);
    return res.status(200).json({
      success: true,
      message: "Fetch detail successfully",
      data: detail,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch detail",
      error: error.message,
    });
  }
};

// Get all work with us
const getAllWorkWithUs = async (req, res) => {
  try {
    const details = await workServices.getDetails();
    return res.status(200).json({
      success: true,
      message: "Fetch details successfully",
      data: details,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch details",
      error: error.message,
    });
  }
};
// Update detail
const updateWorkWithUs = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await workServices.putDetail(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update detail successfully",
      data: detail,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update details",
      error: error.message,
    });
  }
};

// Delete work with us
const deleteWorkWithUs = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await workServices.deleteDetail(id);
    return res.status(200).json({
      success: true,
      message: "Delete detail successfully",
      data: detail,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete details",
      error: error.message,
    });
  }
};
module.exports = {
  createDetails,
  updateWorkWithUs,
  deleteWorkWithUs,
  getWorkWithUs,
  getAllWorkWithUs,
};
