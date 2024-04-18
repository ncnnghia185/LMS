const blogCategory = require("../models/blogCatModel");
const slugify = require("slugify");
// Create document category
const createBlogCategory = async (data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing data to create");
  if (data.title) data.slug = slugify(data.title);
  const category = await blogCategory.create(data);
  return category;
};
// Get all document categories
const allBlogCategories = async () => {
  const categories = await blogCategory.find();
  return categories;
};

// Get a document category
const getBlogCategory = async (slug) => {
  const category = await blogCategory.findOne({ slug: slug });
  if (!category) throw new Error("This document category does not exist");
  return category;
};

// Update document category
const updateBlogCategory = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update document category");
  if (data.title) data.slug = slugify(data.title);
  const updatedCategory = await blogCategory.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCategory;
};

// Delete document category
const deleteBlogCategory = async (id) => {
  const deletedCategory = await blogCategory.findByIdAndDelete(id);
  return deletedCategory;
};
module.exports = {
  createBlogCategory,
  allBlogCategories,
  getBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};
