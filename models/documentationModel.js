const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var documentationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "LMS Admin",
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: [],
      required: true,
    },
    doc_image: {
      type: String,
      default: "https://i.ibb.co/qmwdbZt/doc-default.png",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Documentation", documentationSchema);
