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
