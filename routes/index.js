const userRoutes = require("./userRoutes");
const tutorialCatRoutes = require("./tutorialCategoryRoutes");
const tutorialRoutes = require("./tutorialRoutes");
const newLetterRoutes = require("./newsLetterRoutes");
const reviewRoutes = require("./reviewRoutes");
const contactRoutes = require("./contactRoutes");
const videoRoutes = require("./videoRoutes");
const documentationRoutes = require("./documentationRoutes");
const blogRoutes = require("./blogRoutes");
const docCategoryRoutes = require("./docCatRoutes");
const blogCategoryRoutes = require("./blogCatRoutes");
const courseCategoryRoutes = require("./courseCatRoutes");
const courseRoutes = require("./courseRoutes");
const lessonRoutes = require("./lessonRoutes");
const workRoutes = require("./workWithUsRoutes");
const projectCategoryRoutes = require("./projectCatRoutes");
const projectRoutes = require("./projectRoutes");
const sessiontRoutes = require("./sessionRoutes");
const rateLimit = require("../utils/limitRequest");
const qnaRoutes = require("./Q&A Routes/qnaRoutes");
const { notFound, handleError } = require("../middlewares/errorHandler");
const initWebRoute = (app) => {
  app.use("/api", rateLimit(15 * 60 * 1000, 50, "Only 50 request allowed"));
  app.use("/api/user", userRoutes);
  app.use("/api/tutorial-category", tutorialCatRoutes);
  app.use("/api/tutorial", tutorialRoutes);
  app.use("/api/newsletter", newLetterRoutes);
  app.use("/api/review", reviewRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/video", videoRoutes);
  app.use("/api/documentation", documentationRoutes);
  app.use("/api/blog", blogRoutes);
  app.use("/api/course", courseRoutes);
  app.use("/api/lesson", lessonRoutes);
  app.use("/api/documentation/category", docCategoryRoutes);
  app.use("/api/blog/category", blogCategoryRoutes);
  app.use("/api/course/category", courseCategoryRoutes);
  app.use("/api/project/category", projectCategoryRoutes);
  app.use("/api/project", projectRoutes);
  app.use("/api/book-session", sessiontRoutes);
  app.use("/api/work", workRoutes);
  app.use("/api/question", qnaRoutes);

  // Error Handler
  app.use(notFound);
  app.use(handleError);
};

module.exports = initWebRoute;
