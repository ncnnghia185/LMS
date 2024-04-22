const jwt = require("jsonwebtoken");

const verifyAccesToken = async (req, res, next) => {
  try {
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          return res.status(401).json({
            success: false,
            mes: "Invalid Token",
          });
        }

        req.user = decode;
        next();
      });
    } else {
      return res.status(401).json({
        success: false,
        mes: "Required Authentication",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      mes: "Server Error",
    });
  }
};

const isAdmin = async (req, res, next) => {
  const { roles } = req.user;

  if (roles !== "admin") {
    res.status(401).json({
      success: false,
      mes: " REQUIRE ADMIN ROLE",
    });
  }

  next();
};

const isInstructor = async (req, res, next) => {
  const { roles } = req.user;
  if (roles !== "instructor") {
    res.status(401).json({
      success: false,
      mes: " REQUIRE INSTRUCTOR ROLE",
    });
  }
  next();
};

const isBoth = async (req, res, next) => {
  const { roles } = req.user;
  if (roles === "admin" || roles === "instructor") {
    next();
  } else {
    return res.status(400).json({
      success: false,
      mes: "REQUIRE ADMIN OR INSTRUCTOR ROLE",
    });
  }
};
module.exports = {
  verifyAccesToken,
  isAdmin,
  isInstructor,
  isBoth,
};
