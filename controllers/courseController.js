const courseServices = require("../services/courseServices");

// Create new course
const createNewCourse = async (req, res) => {
  try {
    const { _id } = req.user;
    const course = await courseServices.postNewCourse(_id, req.body);
    return res.status(200).json({
      success: true,
      message: "Create course successfully",
      data: course,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create new course",
      error: error.message,
    });
  }
};

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await courseServices.getAllCourses();
    return res.status(200).json({
      success: true,
      message: "Fetch all courses successfully",
      data: courses,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetched all courses failed",
      error: error.message,
    });
  }
};

// Get a course
const getCourse = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await courseServices.getACourse(slug);
    return res.status(200).json({
      success: true,
      message: "Fetch course successfully",
      data: course,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetched course failed",
      error: error.message,
    });
  }
};

// Get courses by instructor
const coursesByInstructor = async (req, res) => {
  try {
    const { _id } = req.user;
    const courses = await courseServices.getCourseByInstructor(_id);
    return res.status(200).json({
      success: true,
      message: "Fetch course by this instructor successfully",
      data: courses,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetched courses by this instructor failed",
      error: error.message,
    });
  }
};
// Update course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await courseServices.updateCourse(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Updated course successfully",
      data: updatedCourse,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Update course failed",
      error: error.message,
    });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await courseServices.deleteCourse(id);
    return res.status(200).json({
      success: true,
      message: "Deleted course successfully",
      data: deletedCourse,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete course failed",
      error: error.message,
    });
  }
};

module.exports = {
  createNewCourse,
  getCourses,
  getCourse,
  coursesByInstructor,

  updateCourse,
  deleteCourse,
};
