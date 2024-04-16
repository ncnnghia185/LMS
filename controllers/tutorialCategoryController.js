const tutorialCatServices = require("../services/tutorialCategoryServices");

// Create new tutorial category
const createTutorialCat = async (req, res) => {
  try {
    const newTutorialCat = await tutorialCatServices.newTutorialCategory(
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Create new tutorial category successfully",
      data: newTutorialCat,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not create tutorial category",
      error: error.message,
    });
  }
};

// Get all tutorial categories
const getTutorialCategories = async (req, res) => {
  try {
    const tutorialCats = await tutorialCatServices.allTutorialCats();
    return res.status(200).json({
      success: true,
      message: "All tutorial categories",
      data: tutorialCats,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "can not fetch tutorial categories",
      error: error.message,
    });
  }
};

// Get a tutorial category
const getTutorialCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialCat = await tutorialCatServices.aTutorialCat(id);
    return res.status(200).json({
      success: true,
      message: "Tutorial Category",
      data: tutorialCat,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "can not fetch tutorial category",
      error: error.message,
    });
  }
};

// Update tutorial category infor
const updateTutorialCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTutorialCat = await tutorialCatServices.updateTutorialCategory(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Updated tutorial category successfully",
      data: updateTutorialCat,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Update tutorial category failed",
      error: error.message,
    });
  }
};

// Delete tutorial category
const deleteTutorialCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTutorialCat = await tutorialCatServices.deleteTutorialCategory(
      id
    );
    return res.status(200).json({
      success: true,
      message: "Deleted tutorial category successfully",
      data: deleteTutorialCat,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete tutorial category failed",
      error: error.message,
    });
  }
};
module.exports = {
  createTutorialCat,
  getTutorialCategories,
  getTutorialCategory,
  updateTutorialCategory,
  deleteTutorialCategory,
};
