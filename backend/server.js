const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const hotelRoutes = require("./routes/hotelRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();
// console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hotels", hotelRoutes);

app.use("/api/users", userRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/weather", weatherRoutes);

app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Kashmir Safe Travel Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
