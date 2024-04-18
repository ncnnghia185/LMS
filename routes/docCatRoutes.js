const router = require("express").Router();
const docCatController = require("../controllers/docCatController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/:slug", docCatController.getDocCategory);
router.get("/", docCatController.getDocCategories);
router.use(verifyAccesToken, isAdmin);
router.post("/", docCatController.createDocCategory);
router.put("/:id", docCatController.updateDocCategory);
router.delete("/:id", docCatController.deleteDocCategory);
module.exports = router;
