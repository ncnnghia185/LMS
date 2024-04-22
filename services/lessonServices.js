const Lesson = require("../models/lessonModel");
const Course = require("../models/courseModel");
const slugify = require("slugify");

// Create new lesson
const createLesson = async (cId, data) => {
  const findCourse = await Course.findById(cId);

  if (!findCourse) throw new Error("This course does not exist");
  if (Object.keys(data).length === 0) throw new Error("Missing lesson data");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const lesson = await Lesson.create(data);
  await Course.findByIdAndUpdate(
    cId,
    {
      $push: {
        lessons: lesson._id,
      },
    },
    { new: true }
  );

  return lesson;
};

// Get lesson
const getLesson = async (id) => {
  const lesson = await Lesson.findById(id);
  if (!lesson) throw new Error("Couldn't find lesson");
  return lesson;
};
// Delete lesson
const deleteLesson = async (cid, lid) => {
  const lesson = await Lesson.findByIdAndDelete(lid);
  if (!lesson) throw new Error("This lesson not exists");
  const course = await Course.findByIdAndDelete(
    cid,
    { $pull: { lessons: lesson._id } },
    { new: true }
  );
  return lesson;
};

// Get Lesson by course
const getLessonsByCourse = async (cid) => {
  const lessons = await Course.findById(cid).select("lessons");
  if (lessons.length === 0) throw new Error("This course not has any lessons");
  return lessons;
};

// Update Lesson
const updateLesson = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update Lesson");
  if (data.title) data.slug = slugify(data.title);
  const lesson = Lesson.findByIdAndUpdate(id, data, { new: true });
  return lesson;
};
module.exports = {
  createLesson,
  deleteLesson,
  getLesson,
  getLessonsByCourse,
  updateLesson,
};
