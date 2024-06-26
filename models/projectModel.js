const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: true,
    },
    links: [
      {
        name: String,
        url: String,
      },
    ],
    image: [],
    author: {
      type: String,
      default: "Admin",
    },
    price: {
      type: Number,
      default: 0,
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    techStack: [],
    keywords: [],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Project", projectSchema);
