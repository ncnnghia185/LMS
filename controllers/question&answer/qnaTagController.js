const tagServices = require("../../services/Q&AServices/qnaTagServices");

const createTagQuestion = async (req, res) => {
  try {
    const { qid } = req.params;
    const tag = await tagServices.postTagQuestion(qid, req.body);
    return res.status(200).json({
      success: true,
      message: "Create tag question successfully",
      data: tag,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to create tag question",
      error: error.message,
    });
  }
};

// Update tag question
const updateTagQuestion = async (req, res) => {
  try {
    const { tid } = req.params;
    const tag = await tagServices.updateTagQuestion(tid, req.body);
    return res.status(200).json({
      success: true,
      message: "Update tag question successfully",
      data: tag,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to update tag question",
      error: error.message,
    });
  }
};

// Delete tag question
const deleteTagQuestion = async (req, res) => {
  try {
    const { qid, tid } = req.params;
    const tag = await tagServices.deleteTagQuestion(qid, tid);
    return res.status(200).json({
      success: true,
      message: "Delete tag question successfully",
      data: tag,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to delete tag question",
      error: error.message,
    });
  }
};

// Get tag question
const getATagQuestion = async (req, res) => {
  try {
    const { slug } = req.params;
    const tag = await tagServices.getTagQuestion(slug);
    return res.status(200).json({
      success: true,
      message: "Get tag question successfully",
      data: tag,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to get tag question",
      error: error.message,
    });
  }
};

// Get all tags question
const getAllTagQuestion = async (req, res) => {
  try {
    const tags = await tagServices.getTagsQuestion();
    return res.status(200).json({
      success: true,
      message: "Get all tags question successfully",
      data: tags,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to get all tags question",
      error: error.message,
    });
  }
};
module.exports = {
  createTagQuestion,
  updateTagQuestion,
  deleteTagQuestion,
  getATagQuestion,
  getAllTagQuestion,
};
