const router = require("express").Router();
const reviewController = require("../controllers/reviewController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.use(verifyAccesToken);
router.post("/", reviewController.createReview);
router.get("/", reviewController.getAllReviews);
router.get("/:id", reviewController.getAReview);
router.put("/update/:id", isAdmin, reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);
module.exports = router;
