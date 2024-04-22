const router = require("express").Router();
const courseCatController = require("../controllers/courseCatController");
const {
  verifyAccesToken,
  isAdmin,
  isBoth,
} = require("../middlewares/verifyToken");

router.get("/", courseCatController.getCourseCategories);
router.get("/:slug", courseCatController.getCourseCategory);

router.post(
  "/",
  verifyAccesToken,
  isBoth,
  courseCatController.createCourseCategory
);
router.put(
  "/:id",
  verifyAccesToken,
  isBoth,
  courseCatController.updateCourseCategory
);
router.delete(
  "/:id",
  verifyAccesToken,
  isAdmin,
  courseCatController.deleteCourseCategory
);

module.exports = router;
