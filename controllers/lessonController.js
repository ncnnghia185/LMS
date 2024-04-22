const lessonServices = require("../services/lessonServices");

// Create new lesson
const createLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const lesson = await lessonServices.createLesson(courseId, req.body);
    return res.status(200).json({
      success: true,
      message: "Lesson created successfully",
      data: lesson,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Create a new lesson failed",
      error: error.message,
    });
  }
};

// Get a lesson
const getALesson = async (req, res) => {
  try {
    const { lId } = req.params;
    const lesson = await lessonServices.getLesson(lId);
    return res.status(200).json({
      success: true,
      message: "Fetch lesson successfully",
      data: lesson,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch a lesson failed",
      error: error.message,
    });
  }
};

// Get all lessons by course
const getAllLessonsByCourse = async (req, res) => {
  try {
    const { cId } = req.params;
    const lessonsByCourse = await lessonServices.getLessonsByCourse(cId);
    return res.status(200).json({
      success: true,
      message: "Fetch lessons by course successfully",
      data: lessonsByCourse,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch all lessons failed",
      error: error.message,
    });
  }
};

// Update Lesson
const updateALesson = async (req, res) => {
  try {
    const { id } = req.params;
    const updateLesson = await lessonServices.updateLesson(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update lesson successfully",
      data: updateLesson,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Update lesson failed",
      error: error.message,
    });
  }
};
// Delete lesson
const deleteALesson = async (req, res) => {
  try {
    const { cId, lId } = req.params;
    const lesson = await lessonServices.deleteLesson(cId, lId);
    return res.status(200).json({
      success: true,
      message: "Delete lesson successfully",
      data: lesson,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete lesson failed",
      error: error.message,
    });
  }
};

module.exports = {
  createLesson,
  deleteALesson,
  getALesson,
  getAllLessonsByCourse,
  updateALesson,
};
