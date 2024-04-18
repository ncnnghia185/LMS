const router = require("express").Router();
const documentationController = require("../controllers/documentationController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", documentationController.getAllDocs);
router.get("/:slug", documentationController.getADoc);
router.use(verifyAccesToken, isAdmin);
router.post("/", documentationController.createDoc);
router.put("/:id", documentationController.updateDoc);
router.delete("/:id", documentationController.deleteDoc);

module.exports = router;
