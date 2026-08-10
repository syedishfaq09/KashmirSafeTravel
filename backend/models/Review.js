const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot be more than 5"],
  },

  comment: {
    type: String,
    required: true,
  },

  reviewDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
