const jwt = require("jsonwebtoken");

const generateAccessToken = (uid, role) => {
  return jwt.sign({ _id: uid, roles: role }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
};

const generateRefreshToken = (uid) => {
  return jwt.sign({ _id: uid }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
