const reviewServices = require("../services/reviewServices");

// Create new review
const createReview = async (req, res) => {
  try {
    const { _id } = req.user;
    const newReview = await reviewServices.createReview(_id, req.body);
    return res.status(200).json({
      success: true,
      message: "Review created successfully",
      data: newReview,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Failed to create review",
      error: error.message,
    });
  }
};

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewServices.allReviews();
    return res.status(200).json({
      success: true,
      message: "Fetched all reviews successfully",
      data: reviews,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Failed to fetch all reviews",
      error: error.message,
    });
  }
};
// Get review
const getAReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewServices.aReview(id);
    return res.status(200).json({
      success: true,
      message: "Fetched a review successfully",
      data: review,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Failed to fetch a review",
      error: error.message,
    });
  }
};

// Update Review
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewServices.updateReview(id, req.body.approved);
    return res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Failed to update review",
      error: error.message,
    });
  }
};
// Delete Review
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewServices.deleteReview(id);
    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: review,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Failed to delete review",
      error: error.message,
    });
  }
};
module.exports = {
  createReview,
  getAllReviews,
  getAReview,
  updateReview,
  deleteReview,
};
