const userRoutes = require("./userRoutes");
const tutorialCatRoutes = require("./tutorialCategoryRoutes");
const tutorialRoutes = require("./tutorialRoutes");
const newLetterRoutes = require("./newsLetterRoutes");
const reviewRoutes = require("./reviewRoutes");
const { notFound, handleError } = require("../middlewares/errorHandler");
const initWebRoute = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/tutorial-category", tutorialCatRoutes);
  app.use("/api/tutorial", tutorialRoutes);
  app.use("/api/newsletter", newLetterRoutes);
  app.use("/api/review", reviewRoutes);
  // Error Handler
  app.use(notFound);
  app.use(handleError);
};

module.exports = initWebRoute;
