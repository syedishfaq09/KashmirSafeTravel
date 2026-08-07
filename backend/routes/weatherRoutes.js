const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch weather",
    });
  }
});

module.exports = router;
