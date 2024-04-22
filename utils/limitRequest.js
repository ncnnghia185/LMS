const limtter = require("express-rate-limit");

function rateLimit(time, maxReq, message) {
  let limit = limtter({
    windowMs: time ? time : 15 * 60 * 1000,
    max: maxReq ? maxReq : 100,
    standarHeaders: true,
    legacyHeaders: true,
    message: {
      status: false,
      code: "TOO_MANY_REQUESTS",
      message:
        message || "Too many requests. Please try again after 15 minutes",
    },
  });

  return limit;
}

module.exports = rateLimit;
