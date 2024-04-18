const router = require("express").Router();
const blogController = require("../controllers/blogController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/", blogController.getAllBlogs);
router.get("/:slug", blogController.getABlog);
router.use(verifyAccesToken, isAdmin);
router.post("/", blogController.createNewBlog);
router.put("/update/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);
module.exports = router;
