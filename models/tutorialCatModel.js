const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var tutorialCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    image: {
      type: String,
      default: "https://i.ibb.co/p2WWrq9/default-image.png",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("TutorialCategory", tutorialCategorySchema);
