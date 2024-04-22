const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      unique: true,
    },
    slug: {
      type: String,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "https://i.ibb.co/qmwdbZt/doc-default.png",
    },
    category: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lessons: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Lesson",
      default: [],
    },
    totalHours: {
      type: String,
      default: 0,
    },
    enrolls: {
      type: String,
      default: 0,
    },
    ratings: [
      {
        stars: Number,
        comments: String,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    totalRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Course", courseSchema);
