const docCategory = require("../models/docCatModel");
const slugify = require("slugify");
// Create document category
const createDocCategory = async (data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing data to create");
  if (data.title) data.slug = slugify(data.title);
  const category = await docCategory.create(data);
  return category;
};
// Get all document categories
const allDocCategories = async () => {
  const categories = await docCategory.find();
  return categories;
};

// Get a document category
const getDocCategory = async (slug) => {
  const category = await docCategory.findOne({ slug: slug });
  if (!category) throw new Error("This document category does not exist");
  return category;
};

// Update document category
const updateDocCategory = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update document category");
  if (data.title) data.slug = slugify(data.title);
  const updatedCategory = await docCategory.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCategory;
};

// Delete document category
const deleteDocCategory = async (id) => {
  const deletedCategory = await docCategory.findByIdAndDelete(id);
  return deletedCategory;
};
module.exports = {
  createDocCategory,
  allDocCategories,
  getDocCategory,
  updateDocCategory,
  deleteDocCategory,
};
