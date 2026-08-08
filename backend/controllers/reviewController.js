const Review = require("../models/Review");

// Get reviews of a hotel
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      hotelId: req.params.hotelId,
    }).sort({ reviewDate: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add a new review
const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ reviewDate: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching all reviews",
    });
  }
};

module.exports = {
  getReviews,
  addReview,
  getAllReviews,
};
