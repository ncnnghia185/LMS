const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put(
  "/update-profile",
  verifyAccesToken,
  userController.updateUserProfile
);
router.get("/profile/:id", verifyAccesToken, userController.getUser);
router.put("/change-password", verifyAccesToken, userController.changePassword);
router.post("/forgot-password", userController.forgotPasswordToken);
router.put("/reset-password/:token", userController.resetPassword);
// Required Admin Role
router.use(verifyAccesToken, isAdmin);
router.get("/all-users", userController.getAllUsers);
router.delete("/delete-user/:id", userController.deleteUser);
router.put("/block/:id", userController.blockUser);
router.put("/unblock/:id", userController.unblockUser);
module.exports = router;
