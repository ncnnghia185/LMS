const router = require("express").Router();
const courseController = require("../controllers/courseController");
const lessonController = require("../controllers/lessonController");
const {
  verifyAccesToken,
  isAdmin,
  isBoth,
  isInstructor,
} = require("../middlewares/verifyToken");

router.post("/", verifyAccesToken, isBoth, courseController.createNewCourse);
router.get("/all", courseController.getCourses);
router.get("/:slug", courseController.getCourse);
router.get(
  "/instructor/all-courses",
  verifyAccesToken,
  isInstructor,
  courseController.coursesByInstructor
);
router.put(
  "/update/:id",
  verifyAccesToken,
  isBoth,
  courseController.updateCourse
);
router.delete("/:id", verifyAccesToken, isBoth, courseController.deleteCourse);

// Lesson routes
router.post(
  "/lesson/:courseId",
  verifyAccesToken,
  isBoth,
  lessonController.createLesson
);

router.delete(
  "/lesson/:cId/:lId",
  verifyAccesToken,
  isBoth,
  lessonController.deleteALesson
);

router.get("/lesson/:lId", verifyAccesToken, lessonController.getALesson);
router.get(
  "/all-lessons/:cId",
  verifyAccesToken,
  isBoth,
  lessonController.getAllLessonsByCourse
);
router.put(
  "/lesson/update/:id",
  verifyAccesToken,
  isBoth,
  lessonController.updateALesson
);
module.exports = router;
