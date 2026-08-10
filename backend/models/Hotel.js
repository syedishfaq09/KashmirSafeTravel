const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Hotel", hotelSchema);
