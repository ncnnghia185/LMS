const docCatServices = require("../services/docCatServices");
// Create document category
const createDocCategory = async (req, res) => {
  try {
    const docCategory = await docCatServices.createDocCategory(req.body);
    return res.status(200).json({
      success: true,
      message: "Creat document category successfully",
      data: docCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create document category",
      error: error.message,
    });
  }
};

// Get all document categories
const getDocCategories = async (req, res) => {
  try {
    const docCategories = await docCatServices.allDocCategories();
    return res.status(200).json({
      success: true,
      message: "Fetch all document categories successfully",
      data: docCategories,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch document categories",
      error: error.message,
    });
  }
};

// Get a document category
const getDocCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const docCategory = await docCatServices.docCategory(slug);
    return res.status(200).json({
      success: true,
      message: "Fetch document category successfully",
      data: docCategory,
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
const updateDocCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await docCatServices.updateDocCategory(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Update document category successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update document category",
      error: error.message,
    });
  }
};

// Delete document category
const deleteDocCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await docCatServices.deleteDocCategory(id);
    return res.status(200).json({
      success: true,
      message: "Delete document category successfully",
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete document category",
      error: error.message,
    });
  }
};
module.exports = {
  createDocCategory,
  getDocCategories,
  getDocCategory,
  updateDocCategory,
  deleteDocCategory,
};
