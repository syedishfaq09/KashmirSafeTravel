import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const hotel = location.state?.hotel;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hotelName: hotel.hotelName,
            name,
            phone,
            checkIn,
            checkOut,
            guests: Number(guests),
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Booking Successful!");
        navigate("/booking-success");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mx-auto shadow rounded-4 p-5"
          style={{ maxWidth: "600px" }}
        >
          <BackButton />
          <h2 className="text-center fw-bold mb-4">Hotel Booking</h2>

          {hotel && (
            <div className="alert alert-light border mb-4">
              <h5 className="fw-bold">{hotel.hotelName}</h5>

              <p className="mb-1">📍 {hotel.location}</p>

              <p className="mb-0 text-success fw-bold">
                ₹{hotel.price} / night
              </p>
            </div>
          )}

          <form onSubmit={handleBooking}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label className="fw-semibold mb-2">Check-in Date</label>

            <input
              type="date"
              className="form-control mb-3"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />

            <label className="fw-semibold mb-2">Check-out Date</label>

            <input
              type="date"
              className="form-control mb-3"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />

            <label className="fw-semibold mb-2">Number of Guests</label>

            <select
              className="form-select mb-4"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="">Select Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>

            <button type="submit" className="btn custom-btn w-100">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
