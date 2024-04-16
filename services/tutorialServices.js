const Tutorial = require("../models/tutorialModel");
const slugify = require("slugify");

// Create new tutorial
const newTurorial = async (data) => {
  if (data.title) {
    data.slug = slugify(data.title.toLowerCase());
  }
  if (data.tutorialCategory) {
    data.tutorialCategorySlug = slugify(data.tutorialCategory.toLowerCase());
  }

  const tutorial = await Tutorial.create(data);
  return tutorial;
};

// Get a tutorial
const aTutorial = async (slug, type) => {
  const tutorial = await Tutorial.findOne({
    slug: slug,
    tutorialCategorySlug: type,
  });
  const tutorialTopics = await Tutorial.find({
    tutorialCategorySLug: type,
  })
    .select("topicName title slug tutorialCategorySlug")
    .sort("createdAt");

  if (!tutorial) throw new Error("This tutorial not found");
  return { tutorial, tutorialTopics };
};
// Get all tutorials
const allTutorials = async () => {
  const tutorials = await Tutorial.find();
  return tutorials;
};

// Update tutorial
const updateTutorial = async (id, data) => {
  if (Object.keys(data).length === 0) {
    throw new Error("Please provide data to update");
  }
  const tutorial = await Tutorial.findById(id);
  if (!tutorial) throw new Error("Couldn't find tutorial");
  if (data.title) data.slug = slugify(data.title);
  if (data.tutorialCategory) {
    data.tutorialCategorySlug = slugify(data.tutorialCategory.toLowerCase());
  }
  const updateTutorial = await Tutorial.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updateTutorial;
};

// Delete a tutorial
const deleteTutorial = async (id) => {
  const deleteTutorial = await Tutorial.findOneAndDelete(id);
  return deleteTutorial;
};
module.exports = {
  newTurorial,
  aTutorial,
  allTutorials,
  updateTutorial,
  deleteTutorial,
};
