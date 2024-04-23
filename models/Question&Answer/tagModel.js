const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var tagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    totalques: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Tag", tagSchema);
