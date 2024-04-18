const videoServices = require("../services/videoServices");

// Post a new video
const postNewVideo = async (req, res) => {
  try {
    const video = await videoServices.postVideo(req.body);
    return res.status(200).json({
      success: true,
      message: "Post video successfully",
      data: video,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Post video failed",
      error: error.message,
    });
  }
};

// Get a video
const getAVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await videoServices.getVideo(id);
    return res.status(200).json({
      success: true,
      message: "Fetch video successfully",
      data: video,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch video failed",
      error: error.message,
    });
  }
};

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await videoServices.getVideos();
    return res.status(200).json({
      success: true,
      message: "Fetch videos successfully",
      data: videos,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch videos failed",
      error: error.message,
    });
  }
};

// Update video
const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await videoServices.updateVideo(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update video successfully",
      data: video,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Update video failed",
      error: error.message,
    });
  }
};

// Delete video
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await videoServices.deleteVideo(id);
    return res.status(200).json({
      success: true,
      message: "Delete video successfully",
      data: video,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete video failed",
      error: error.message,
    });
  }
};
module.exports = {
  postNewVideo,
  getAVideo,
  getAllVideos,
  updateVideo,
  deleteVideo,
};
