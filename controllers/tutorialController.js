const tutorialServices = require("../services/tutorialServices");

// Create new tutorial
const createTutorial = async (req, res) => {
  try {
    const tutorial = await tutorialServices.newTurorial(req.body);
    return res.status(200).json({
      success: true,
      message: "Create new tutorial successfully",
      data: tutorial,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not create new tutorial",
      error: error.message,
    });
  }
};

// Get a tutorial
const getATutorial = async (req, res) => {
  try {
    const { slug, type } = req.params;
    const tutorial = await tutorialServices.aTutorial(slug, type);
    return res.status(200).json({
      success: true,
      message: "Get tutorial successfully",
      data: [tutorial.tutorial, tutorial.tutorialTopics],
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not find tutorial",
      error: error.message,
    });
  }
};

// Get all tutorials
const getAllTutorials = async (req, res) => {
  try {
    const tutorials = await tutorialServices.allTutorials();
    return res.status(200).json({
      success: true,
      message: "Get tutorials successfully",
      data: tutorials,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not fetch all tutorials",
      error: error.message,
    });
  }
};

// Update Tutorial Infor
const updateTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTutorial = await tutorialServices.updateTutorial(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Updated tutorial successfully",
      data: updateTutorial,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not update tutorial",
      error: error.message,
    });
  }
};

// Delete tutorial
const deleteTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTutorial = await tutorialServices.deleteTutorial(id);
    return res.status(200).json({
      success: true,
      message: "Deleted tutorial successfully",
      data: deletedTutorial,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not delete tutorial",
      error: error.message,
    });
  }
};
module.exports = {
  createTutorial,
  getATutorial,
  getAllTutorials,
  updateTutorial,
  deleteTutorial,
};
