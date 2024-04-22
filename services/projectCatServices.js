const projectCategory = require("../models/projectCategoryModel");
const slugify = require("slugify");
// Create project category
const createProjectCategory = async (data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing data to create");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const category = await projectCategory.create(data);
  return category;
};
// Get all projects categories
const allProjectCategories = async () => {
  const categories = await projectCategory.find();
  return categories;
};

// Get a project category
const getProjectCategory = async (slug) => {
  const category = await projectCategory.findOne({ slug: slug });
  if (!category) throw new Error("This project category does not exist");
  return category;
};

// Update project category
const updateProjectCategory = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update project category");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const updatedCategory = await projectCategory.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCategory;
};

// Delete project category
const deleteProjectCategory = async (id) => {
  const deletedCategory = await projectCategory.findByIdAndDelete(id);
  return deletedCategory;
};
module.exports = {
  createProjectCategory,
  allProjectCategories,
  getProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};
