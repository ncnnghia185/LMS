const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var docCatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("docCategory", docCatSchema);
