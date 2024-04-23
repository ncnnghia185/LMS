const questionServices = require("../../services/Q&AServices/qnaServices");

// Post a question
const postQuestion = async (req, res) => {
  try {
    const { _id } = req.user;
    const question = await questionServices.createQuestion(_id, req.body);
    return res.status(200).json({
      success: true,
      message: "Create question successfully",
      data: question,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to post question",
      error: error.message,
    });
  }
};

// Get a question
const getAQuestion = async (req, res) => {
  try {
    const { slug } = req.params;
    const question = await questionServices.getQuestion(slug);
    return res.status(200).json({
      success: true,
      message: "Get question successfully",
      data: question,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to get question",
      error: error.message,
    });
  }
};

// Get all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await questionServices.getQuestions();
    return res.status(200).json({
      success: true,
      message: "Get all questions successfully",
      data: questions,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to get all questions",
      error: error.message,
    });
  }
};

// Update question
const updateAQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await questionServices.updateQuestion(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update question successfully",
      data: question,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to update question",
      error: error.message,
    });
  }
};

// Delete question
const deleteAQuestion = async (req, res) => {
  try {
    const { qaid, qid, aid } = req.params;
    const deleteQuestion = await questionServices.deleteQuestion(
      qaid,
      qid,
      aid
    );
    return res.status(200).json({
      success: true,
      message: "Delete question successfully",
      data: deleteQuestion,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to delete question",
      error: error.message,
    });
  }
};

// Post answer
const postAnswer = async (req, res) => {
  try {
    const { _id } = req.user;
    const { qaid } = req.params;
    const answer = await questionServices.createAnswer(qaid, _id, req.body);
    return res.status(200).json({
      success: true,
      message: "Create answer successfully",
      data: answer,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to post answer",
      error: error.message,
    });
  }
};

// Update answer
const updateAnswer = async (req, res) => {
  try {
    const { aid } = req.params;
    const answer = await questionServices.updateAnswer(aid, req.body);
    return res.status(200).json({
      success: true,
      message: "Update answer successfully",
      data: answer,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to update answer",
      error: error.message,
    });
  }
};

// Post comment
const postComment = async (req, res) => {
  try {
    const { _id } = req.user;
    const { qid } = req.params;
    const comment = await questionServices.createAnswer(qid, _id, req.body);
    return res.status(200).json({
      success: true,
      message: "Create comment successfully",
      data: comment,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to post comment",
      error: error.message,
    });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    const { qid, cid } = req.params;
    const comment = await questionServices.deleteComment(qid, cid);
    return res.status(200).json({
      success: true,
      message: "Delete comment successfully",
      data: comment,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error to delete comment",
      error: error.message,
    });
  }
};
module.exports = {
  postQuestion,
  getAQuestion,
  getAllQuestions,
  deleteAQuestion,
  updateAQuestion,
  postAnswer,
  updateAnswer,
  postComment,
  deleteComment,
};
