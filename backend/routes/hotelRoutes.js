const express = require("express");
const router = express.Router();

const {
  getHotels,
  getHotelById,
  addHotel,
  deleteHotel,
  updateHotel,
} = require("../controllers/hotelController");

router.get("/", getHotels);
router.get("/:id", getHotelById);
router.post("/", addHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

module.exports = router;
