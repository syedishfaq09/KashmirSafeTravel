const express = require("express");
const router = express.Router();

const {
  getReviews,
  addReview,
  getAllReviews,
} = require("../controllers/reviewController");

router.get("/admin/all", getAllReviews);
router.get("/:hotelId", getReviews);

router.post("/", addReview);

module.exports = router;
