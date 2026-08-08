import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import DestinationDetails from "./pages/DestinationDetails";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import TourPackages from "./pages/TourPackages";
import SafetyCenter from "./pages/SafetyCenter";
import ReportScam from "./pages/ReportScam";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddHotel from "./pages/AddHotel";
import ManageHotels from "./pages/ManageHotels";
import HotelDetails from "./pages/HotelDetails";
import AdminReviews from "./pages/AdminReviews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/destination/:name" element={<DestinationDetails />} />

        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:destination" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/safety-center" element={<SafetyCenter />} />
        <Route path="/report-scam" element={<ReportScam />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-hotel" element={<AddHotel />} />
        <Route path="/admin/manage-hotels" element={<ManageHotels />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
