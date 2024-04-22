const courseCatServices = require("../services/courseCatServices");
// Create document category
const createCourseCategory = async (req, res) => {
  try {
    const courseCategory = await courseCatServices.createCourseCategory(
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Creat course category successfully",
      data: courseCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create course category",
      error: error.message,
    });
  }
};

// Get all document categories
const getCourseCategories = async (req, res) => {
  try {
    const courseCategories = await courseCatServices.allCourseCategories();
    return res.status(200).json({
      success: true,
      message: "Fetch all course categories successfully",
      data: courseCategories,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch course categories",
      error: error.message,
    });
  }
};

// Get a document category
const getCourseCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const courseCategory = await courseCatServices.getCourseCategory(slug);
    return res.status(200).json({
      success: true,
      message: "Fetch document category successfully",
      data: courseCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch document category",
      error: error.message,
    });
  }
};

// Update document category
const updateCourseCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await courseCatServices.updateCourseCategory(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Update course category successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update course category",
      error: error.message,
    });
  }
};

// Delete document category
const deleteCourseCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await courseCatServices.deleteCourseCategory(id);
    return res.status(200).json({
      success: true,
      message: "Delete course category successfully",
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete course category",
      error: error.message,
    });
  }
};
module.exports = {
  createCourseCategory,
  getCourseCategories,
  getCourseCategory,
  updateCourseCategory,
  deleteCourseCategory,
};
