const courseCategory = require("../models/coursesCatModel");
const slugify = require("slugify");
// Create document category
const createCourseCategory = async (data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing data to create");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const courseCat = await courseCategory.create(data);
  return courseCat;
};
// Get all document categories
const allCourseCategories = async () => {
  const categories = await courseCategory.find();
  return categories;
};

// Get a document category
const getCourseCategory = async (slug) => {
  const category = await courseCategory.findOne({ slug: slug });
  if (!category) throw new Error("This document category does not exist");
  return category;
};

// Update document category
const updateCourseCategory = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update course category");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const updatedCategory = await courseCategory.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCategory;
};

// Delete document category
const deleteCourseCategory = async (id) => {
  const deletedCategory = await courseCategory.findByIdAndDelete(id);
  return deletedCategory;
};
module.exports = {
  createCourseCategory,
  allCourseCategories,
  getCourseCategory,
  updateCourseCategory,
  deleteCourseCategory,
};
