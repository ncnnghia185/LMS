const Course = require("../models/courseModel");
const slugify = require("slugify");
const User = require("../models/userModel");
// Create new course
const postNewCourse = async (id, data) => {
  const user = await User.findById(id);
  if (Object.keys(data).length === 0) throw new Error("Missing required data");
  if (user) data.instructor = user._id;

  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const existCourse = await Course.findOne({ title: data.title });
  if (existCourse) throw new Error("This course already exists");
  const course = await Course.create(data);
  return course;
};

// Get all courses
const getAllCourses = async () => {
  const courses = await Course.find();
  return courses;
};

// Get a course
const getACourse = async (slug) => {
  const course = await Course.find({ slug: slug });
  if (!course) throw new Error("Course not found");
  return course;
};

// Get courses by instructor
const getCourseByInstructor = async (id) => {
  const courseByInstructor = await Course.find({ instructor: id });
  if (courseByInstructor.length === 0)
    throw new Error("Not course created by this instructor");
  return courseByInstructor;
};
// Update course
const updateCourse = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update course");
  if (data.title) data.slug = slugify(data.title);
  const course = await Course.findByIdAndUpdate(id, data, { new: true });
  return course;
};

// Delete course
const deleteCourse = async (id) => {
  const course = await Course.findByIdAndDelete(id);
  if (!course) throw new Error("This course not exist");
  return course;
};
module.exports = {
  postNewCourse,
  getAllCourses,
  getACourse,
  getCourseByInstructor,
  updateCourse,
  deleteCourse,
};
