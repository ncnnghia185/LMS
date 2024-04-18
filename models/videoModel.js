const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  thumbnail: {
    type: String,
    default: "https://i.ibb.co/p2WWrq9/default-image.png",
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  keywords: {
    type: [],
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Video", videoSchema);
