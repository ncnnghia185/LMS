const projectCatServices = require("../services/projectCatServices");
// Create project category
const createProjectCategory = async (req, res) => {
  try {
    const projectCategory = await projectCatServices.createProjectCategory(
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Create project category successfully",
      data: projectCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create project category",
      error: error.message,
    });
  }
};

// Get all projects categories
const getProjectCategories = async (req, res) => {
  try {
    const projectCategories = await projectCatServices.allProjectCategories();
    return res.status(200).json({
      success: true,
      message: "Fetch all projects categories successfully",
      data: projectCategories,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch project categories",
      error: error.message,
    });
  }
};

// Get a project category
const getProjectCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const projectCategory = await projectCatServices.getProjectCategory(slug);
    return res.status(200).json({
      success: true,
      message: "Fetch project category successfully",
      data: projectCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch project category",
      error: error.message,
    });
  }
};

// Update project category
const updateProjectCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await projectCatServices.updateProjectCategory(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Update project category successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update project category",
      error: error.message,
    });
  }
};

// Delete project category
const deleteProjectCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await projectCatServices.deleteProjectCategory(id);
    return res.status(200).json({
      success: true,
      message: "Delete project category successfully",
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete project category",
      error: error.message,
    });
  }
};
module.exports = {
  createProjectCategory,
  getProjectCategories,
  getProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};
