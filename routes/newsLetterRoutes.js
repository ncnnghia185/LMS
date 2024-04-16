const router = require("express").Router();
const newLetterController = require("../controllers/newsLetterController");
const {} = require("../middlewares/verifyToken");

router.post("/", newLetterController.subcribe);
router.delete("/:id", newLetterController.unsubcribe);
module.exports = router;
