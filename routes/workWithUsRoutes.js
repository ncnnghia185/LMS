const router = require("express").Router();
const workController = require("../controllers/workWithUsController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.use(verifyAccesToken, isAdmin);
router.post("/", workController.createDetails);
router.put("/update/:id", workController.updateWorkWithUs);
router.delete("/:id", workController.deleteWorkWithUs);
module.exports = router;
