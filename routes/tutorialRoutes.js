const router = require("express").Router();
const tutorialController = require("../controllers/tutorialController");
const {
  verifyAccesToken,
  isAdmin,
  isInstructor,
} = require("../middlewares/verifyToken");

router.get("/:type/:slug", tutorialController.getATutorial);
// REQUIRE ADMIN ROLE
router.use(verifyAccesToken, isAdmin);
router.get("/", tutorialController.getAllTutorials);
router.post("/", tutorialController.createTutorial);
router.put("/update/:id", tutorialController.updateTutorial);
router.delete("/delete/:id", tutorialController.deleteTutorial);
module.exports = router;
