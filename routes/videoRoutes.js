const router = require("express").Router();
const videoController = require("../controllers/videoController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", videoController.getAllVideos);
router.get("/:id", videoController.getAVideo);
router.use(verifyAccesToken, isAdmin);
router.post("/", videoController.postNewVideo);
router.put("/:id", videoController.updateVideo);
router.delete("/:id", videoController.deleteVideo);
module.exports = router;
