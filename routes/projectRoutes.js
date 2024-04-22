const router = require("express").Router();
const projectController = require("../controllers/projectController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", verifyAccesToken, projectController.getAllProjects);
router.get("/:slug", verifyAccesToken, projectController.getAllProjects);
router.use(verifyAccesToken, isAdmin);

router.post("/", projectController.createNewProject);
router.put("/update/:id", projectController.updateAProject);
router.delete("/:id", projectController.deleteAProject);
module.exports = router;
