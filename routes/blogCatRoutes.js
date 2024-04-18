const router = require("express").Router();
const blogCatController = require("../controllers/blogCatController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/:slug", blogCatController.getBlogCategory);
router.get("/", blogCatController.getBlogCategories);
router.use(verifyAccesToken, isAdmin);
router.post("/", blogCatController.createBlogCategory);
router.put("/:id", blogCatController.updateBlogCategory);
router.delete("/:id", blogCatController.deleteBlogCategory);
module.exports = router;
