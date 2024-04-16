const tutorialCategories = require("../models/tutorialCatModel");
const slugify = require("slugify");
// Create new tutorial category
const newTutorialCategory = async (data) => {
  if (!data) throw new Error("Missing data to create new tutorial category");
  if (data.title) {
    data.slug = slugify(data.title.toLowerCase());
  }
  const newCategory = await tutorialCategories.create(data);
  return newCategory;
};

// Get all tutorial categories
const allTutorialCats = async () => {
  const allTutorialCats = await tutorialCategories.find();
  return allTutorialCats;
};

// Get a tutorial category
const aTutorialCat = async (id) => {
  const tutorialCat = await tutorialCategories.findById(id);
  if (!tutorialCat) throw new Error("This tutorial category not exist");
  return tutorialCat;
};

// Update tutorial category infor
const updateTutorialCategory = async (id, data) => {
  const tutorialCat = await tutorialCategories.findById(id);
  if (!tutorialCat) throw new Error("This tutorial category not found");
  if (!data.title) throw new Error("Missing required value");
  data.slug = slugify(data.title).toLowerCase();

  const updateTutorialCat = await tutorialCategories.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );
  return updateTutorialCat;
};

// Delete tutorial category
const deleteTutorialCategory = async (id) => {
  const tutorialCat = await tutorialCategories.findById(id);
  if (!tutorialCat) throw new Error("This tutorial category not found");
  const deleteTutorialCat = await tutorialCategories.findByIdAndDelete(id);
  return deleteTutorialCat;
};
module.exports = {
  newTutorialCategory,
  allTutorialCats,
  aTutorialCat,
  updateTutorialCategory,
  deleteTutorialCategory,
};
