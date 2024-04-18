const blogServices = require("../services/blogServices");

// Create new blog
const createNewBlog = async (req, res) => {
  try {
    const blog = await blogServices.newBlog(req.body);
    return res.status(200).json({
      success: true,
      message: "New blog created successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create new blog",
      error: error.message,
    });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogServices.allBlogs();
    return res.status(200).json({
      success: true,
      message: "Fetched all blogs successfully",
      data: blogs,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch all blogs",
      error: error.message,
    });
  }
};

// Get a blog
const getABlog = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await blogServices.aBlog(slug);
    return res.status(200).json({
      success: true,
      message: "Fetched blog successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch blog",
      error: error.message,
    });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await blogServices.updateBlog(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Updated blog successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update blog",
      error: error.message,
    });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogServices.deleteBlog(id);
    return res.status(200).json({
      success: true,
      message: "Deleted blog successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete blog",
      error: error.message,
    });
  }
};
module.exports = {
  createNewBlog,
  getAllBlogs,
  getABlog,
  updateBlog,
  deleteBlog,
};
