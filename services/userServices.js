const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/token");

// Hash User's password
const salt = bcrypt.genSaltSync(10);
const hashPasword = (password) => {
  return (hashedPwd = bcrypt.hashSync(password, salt));
};

// Registe a new User
const register = async (data) => {
  // Check if the user's email already exist in Database
  const user = await Users.findOne({ email: data.email });
  if (user) {
    throw new Error("User already exists");
  }
  // Check missing require input
  if (
    !data.firstname ||
    !data.lastname ||
    !data.email ||
    !data.mobile ||
    !data.password ||
    !data.confirmPassword ||
    !data.profession
  ) {
    throw new Error("Missing required value");
  }
  if (data.password !== data.confirmPassword) {
    throw new Error("Confirm password not matched");
  }
  // Create new user with data and save to Database
  const userPwd = await hashPasword(data.password);
  const userConfirmPwd = await hashPasword(data.confirmPassword);
  data.password = userPwd;
  data.confirmPassword = userConfirmPwd;
  const newUser = await Users.create(data);
  return newUser;
};

// Save Refresh Token to Cookie
const saveRefreshTokenToCookie = (response, refreshToken) => {
  response.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

// Login User
const login = async (data, response) => {
  // Check required input
  if (!data.email || !data.password) {
    throw new Error("Missing required value");
  }
  // Check user exist
  const user = await Users.findOne({ email: data.email });
  if (!user) {
    throw new Error("User not exist, please go to register");
  } else {
    // Check password
    const matchedPwd = await bcrypt.compare(data.password, user.password);
    if (!matchedPwd) {
      throw new Error("Password not matched");
    } else {
      const { password, confirmPassword, roles, refreshToken, ...userData } =
        user.toObject();
      const accToken = generateAccessToken(user?._id, roles);
      const newRefreshToken = generateRefreshToken(user?._id);

      // Save refreshToken to Database
      await Users.findByIdAndUpdate(
        user?._id,
        { refreshToken: newRefreshToken },
        { new: true }
      );

      // Save refreshToken to Cookie
      saveRefreshTokenToCookie(response, newRefreshToken);

      return {
        accToken,
        userData,
      };
    }
  }
};

// Get user's infor
const getUser = async (id) => {
  const user = await Users.findById(id).select(
    "-password -confirmPassword -roles"
  );
  if (!user) throw new Error("User not found");
  return user;
};
// Update user's profile
const updateProfile = async (id, data) => {
  const user = await Users.findById(id);
  if (!user) throw new Error("User not found");
  if (!data) throw new Error("Missing update infor");
  const updatedUser = await Users.findByIdAndUpdate(id, data, {
    new: true,
  }).select("-password -confirmPassword -roles");
  return updatedUser;
};

// Delete user
const deleteUser = async (id) => {
  const user = await Users.findById(id);
  if (!user) throw new Error("User not found");
  const deletedUser = await Users.findByIdAndDelete(id);
  return deletedUser;
};
// Get all users
const allUsers = async () => {
  const users = await Users.find().select("-password -confirmPassword -roles");
  return users;
};

// Block a user
const blockUser = async (id) => {
  const user = await Users.findById(id);
  if (!user) throw new Error("This user not exist");
  const blockUser = await Users.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true }
  ).select("-password -confirmPassword -roles");
  return blockUser;
};

// Unblock a user
const unblockUser = async (id) => {
  const user = await Users.findById(id);
  if (!user) throw new Error("This user not exist");
  if (user?.isBlocked === true) {
    const unblockUser = await Users.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    ).select("-password -confirmPassword -roles");
    return unblockUser;
  } else {
    throw new Error("This user is not blocked");
  }
};

// Change Password
const changePassword = async (id, data) => {
  const user = await Users.findById(id);
  if (!data.newPassword) throw new Error("Missing new password");
  console.log(typeof newpassword);
  const compareOldPwd = await bcrypt.compare(data.newPassword, user.password);
  if (compareOldPwd) {
    throw new Error("New password can not be the same as old password");
  } else {
    if (data.newPassword !== data.confirmNewPassword) {
      throw new Error("Confirm new password not matched");
    } else {
      const newHashPwd = await hashPasword(data.newPassword);
      const newHashConfirmPwd = await hashPasword(data.confirmNewPassword);
      user.password = newHashPwd;
      user.confirmPassword = newHashConfirmPwd;
      await user.save();
      return user;
    }
  }
};

// Create password reset token
const resetPasswordToken = async (email) => {
  const user = await Users.findOne({ email: email });
  if (!user) throw new Error("User not found");
  const token = await user.createPasswordResetToken();
  await user.save();
  return token;
};

// Reset Password
const resetPassword = async (newPassword, token) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await Users.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error("User not found");
  user.password = newPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  return user;
};
module.exports = {
  register,
  login,
  allUsers,
  updateProfile,
  deleteUser,
  getUser,
  blockUser,
  unblockUser,
  changePassword,
  resetPasswordToken,
  resetPassword,
};
