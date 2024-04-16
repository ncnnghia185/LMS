const userRoutes = require("./userRoutes");
const tutorialCatRoutes = require("./tutorialCategoryRoutes");
const tutorialRoutes = require("./tutorialRoutes");
const { notFound, handleError } = require("../middlewares/errorHandler");
const initWebRoute = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/tutorial-category", tutorialCatRoutes);
  app.use("/api/tutorial", tutorialRoutes);
  // Error Handler
  app.use(notFound);
  app.use(handleError);
};

module.exports = initWebRoute;
