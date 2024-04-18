const Video = require("../models/videoModel");
const slugify = require("slugify");

// Post new video
const postVideo = async (data) => {
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const newVideo = await Video.create(data);
  return newVideo;
};

// Get a video
const getVideo = async (slug) => {
  const video = await Video.findOne({ slug: slug });
  if (!video) throw new Error("No video found");
  return video;
};

// Get all video
const getVideos = async () => {
  const videos = await Video.find();
  return videos;
};

// Update video
const updateVideo = async (id, data) => {
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const video = await Video.findByIdAndUpdate(id, data, { new: true });
  return video;
};

// Delete video
const deleteVideo = async (id) => {
  const video = await Video.findByIdAndDelete(id);
  if (!video) throw new Error("This video not exists");
  return video;
};
module.exports = {
  postVideo,
  getVideo,
  getVideos,
  updateVideo,
  deleteVideo,
};
