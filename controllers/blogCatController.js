const blogCatServices = require("../services/blogCatServices");
// Create document category
const createBlogCategory = async (req, res) => {
  try {
    const docCategory = await blogCatServices.createBlogCategory(req.body);
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
const getBlogCategories = async (req, res) => {
  try {
    const docCategories = await blogCatServices.allBlogCategories();
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
const getBlogCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const docCategory = await blogCatServices.blogCategory(slug);
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
const updateBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await blogCatServices.updateBlogCategory(
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
const deleteBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await blogCatServices.deleteBlogCategory(id);
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
  createBlogCategory,
  getBlogCategories,
  getBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};
