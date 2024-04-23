const router = require("express").Router();
const sessionController = require("../controllers/sessionController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", verifyAccesToken, sessionController.getAllSessions);
router.get("/:id", verifyAccesToken, sessionController.getASession);
router.use(verifyAccesToken, isAdmin);

router.post("/", sessionController.createSession);
router.put("/update/:id", sessionController.updateASession);
router.delete("/:id", sessionController.deleteASession);
module.exports = router;
