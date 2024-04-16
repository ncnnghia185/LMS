const userRoutes = require("./userRoutes");
const { notFound, handleError } = require("../middlewares/errorHandler");
const initWebRoute = (app) => {
  app.use("/api/user", userRoutes);

  // Error Handler
  app.use(notFound);
  app.use(handleError);
};

module.exports = initWebRoute;
