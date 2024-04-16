const router = require("express").Router();
const tutorialCatController = require("../controllers/tutorialCategoryController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", tutorialCatController.getTutorialCategories);
router.get("/:id", tutorialCatController.getTutorialCategory);
// REQUIRE ADMIN ROLE
router.use(verifyAccesToken, isAdmin);
router.post("/", tutorialCatController.createTutorialCat);
router.put("/update/:id", tutorialCatController.updateTutorialCategory);
router.delete("/:id", tutorialCatController.deleteTutorialCategory);
module.exports = router;
