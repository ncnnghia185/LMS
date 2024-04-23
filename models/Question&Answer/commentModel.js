const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Comment", commentSchema);
