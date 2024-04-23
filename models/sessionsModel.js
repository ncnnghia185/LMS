const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var sessionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Requested",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Sessions", sessionsSchema);
