// Not Found Error
const notFound = (req, res, next) => {
  const error = new Error(`Route NOT Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handle

const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    errorStack: err.stack,
  });
};

module.exports = {
  notFound: notFound,
  handleError: handleError,
};
