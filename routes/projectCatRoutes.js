const router = require("express").Router();
const projectCatController = require("../controllers/projectCatController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", projectCatController.getProjectCategories);
router.use(verifyAccesToken, isAdmin);
router.get("/:slug", projectCatController.getProjectCategory);
router.post("/", projectCatController.createProjectCategory);
router.put("/update/:id", projectCatController.updateProjectCategory);
router.delete("/:id", projectCatController.deleteProjectCategory);
module.exports = router;
