const express = require("express");
const router = express.Router();

const {
  getReviews,
  addReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/reviewController");

router.get("/admin/all", getAllReviews);
router.get("/:hotelId", getReviews);
router.post("/", addReview);
router.delete("/:id", deleteReview);

module.exports = router;
