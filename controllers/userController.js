const userServices = require("../services/userServices");
const sendMail = require("./emailController");

// Resgister new user
const registerUser = async (req, res) => {
  try {
    const newUser = await userServices.register(req.body);
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can not register new user",
      error: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const user = await userServices.login(req.body, res);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can not login user",
      error: error.message,
    });
  }
};

// Logout user
const logoutUser = async (req, res) => {
  const cookie = req.cookies;
  try {
    if (!cookie || !cookie.refreshToken)
      throw new Error("No refresh token available");
    // Clear refresh token in Database
    await userService.updateRefreshToken(cookie.refreshToken);

    // Clear refresh token in cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      success: true,
      mes: "Logout successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      mes: "No refresh token available",
    });
  }
};

// Update user's Profile
const updateUserProfile = async (req, res) => {
  try {
    const { _id } = req.user;
    const updateInfor = await userServices.updateProfile(_id, req.body);
    return res.status(200).json({
      success: true,
      message: "Profile updated",
      data: updateInfor,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not update user profile",
      error: error.message,
    });
  }
};
// Get a user's infor
const getUser = async (req, res) => {
  try {
    const user = await userServices.getUser(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Get user successfully",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not get user",
      error: error.message,
    });
  }
};
// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.allUsers();
    return res.status(200).json({
      success: true,
      message: "All users fetch successfully",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can not get all users",
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const userDelete = await userServices.deleteUser(req.params.id);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: userDelete,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not delete this user",
      error: error.message,
    });
  }
};

// Block a User
const blockUser = async (req, res) => {
  try {
    const blockUser = await userServices.blockUser(req.params.id);
    return res.status(200).json({
      success: true,
      message: "User blocked successfully",
      data: blockUser,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not block this user",
      error: error.message,
    });
  }
};

// Unblock a User
const unblockUser = async (req, res) => {
  try {
    const blockUser = await userServices.unblockUser(req.params.id);
    return res.status(200).json({
      success: true,
      message: "User unblocked successfully",
      data: blockUser,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not unblock this user",
      error: error.message,
    });
  }
};

// Change new password
const changePassword = async (req, res) => {
  try {
    const { _id } = req.user;
    const changePwd = await userServices.changePassword(_id, req.body);
    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
      data: changePwd,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not change password",
      error: error.message,
    });
  }
};

// Forgot password token
const forgotPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;
    const resetToken = await userServices.resetPasswordToken(email);
    const resetLink = `http://localhost:8018/api/user/reset-password/${resetToken}`;
    const data = {
      to: email,
      text: "Hello from Server",
      subject: "Forgot Password",
      html: resetLink,
    };
    sendMail(data);
    return res.status(200).json(resetLink);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not get token",
      error: error.message,
    });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { token } = req.params;
    const user = await userServices.resetPassword(newPassword, token);
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can not reset password",
      error: error.message,
    });
  }
};
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  updateUserProfile,
  deleteUser,
  getUser,
  blockUser,
  unblockUser,
  changePassword,
  forgotPasswordToken,
  resetPassword,
};
