const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1000,
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  free_priview: {
    type: Boolean,
    default: false,
  },
});

//Export the model
module.exports = mongoose.model("Lesson", lessonSchema);
