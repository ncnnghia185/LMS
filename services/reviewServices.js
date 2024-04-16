const Review = require("../models/reviewModel");
const User = require("../models/userModel");

// Create Review
const createReview = async (uid, data) => {
  const user = await User.findById(uid);
  let reviewData = {
    user: user._id,
    comment: data.comment,
    color: data.color,
  };
  const review = await Review.create(reviewData);
  return review;
};

// Get all reviews
const allReviews = async () => {
  const reviews = await Review.find().populate("user");
  return reviews;
};

// Get a review
const aReview = async (id) => {
  const review = await Review.findById(id).populate("user");
  if (!review) throw new Error("This review not found");
  return review;
};
// Update review
const updateReview = async (id, data) => {
  const updateReview = await Review.findByIdAndUpdate(
    id,
    { approved: data },
    { new: true }
  );
  return updateReview;
};
// Delete review
const deleteReview = async (id) => {
  const review = await Review.findByIdAndDelete(id);
  if (!review) throw new Error("This review not exist");
  return review;
};
module.exports = {
  createReview,
  allReviews,
  aReview,
  updateReview,
  deleteReview,
};
