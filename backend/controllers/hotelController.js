const Hotel = require("../models/Hotel");
const Review = require("../models/Review");

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().lean();

    const ratingStats = await Review.aggregate([
      {
        $group: {
          _id: "$hotelId",
          averageRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);

    const ratingsByHotelId = new Map(
      ratingStats.map((item) => [
        item._id.toString(),
        {
          rating: Number(item.averageRating.toFixed(1)),
          reviewCount: item.reviewCount,
        },
      ]),
    );

    const hotelsWithRatings = hotels.map((hotel) => {
      const ratingData = ratingsByHotelId.get(hotel._id.toString());

      return {
        ...hotel,
        rating: ratingData?.rating ?? 0,
        reviewCount: ratingData?.reviewCount ?? 0,
      };
    });

    res.status(200).json(hotelsWithRatings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Hotel Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).lean();

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found",
      });
    }

    const ratingStats = await Review.aggregate([
      {
        $match: {
          hotelId: hotel._id,
        },
      },
      {
        $group: {
          _id: "$hotelId",
          averageRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);

    const ratingData = ratingStats[0];

    res.status(200).json({
      ...hotel,
      rating: ratingData ? Number(ratingData.averageRating.toFixed(1)) : 0,
      reviewCount: ratingData?.reviewCount ?? 0,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getHotels,
  getHotelById,
  addHotel,
  deleteHotel,
  updateHotel,
};
