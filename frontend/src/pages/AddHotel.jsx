import { useState } from "react";
import BackButton from "../components/BackButton";

function AddHotel() {
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  const handleAddHotel = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/hotels`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hotelName,
            location,
            price: Number(price),

            image,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Hotel Added Successfully!");

        setHotelName("");
        setLocation("");
        setPrice("");

        setImage("");
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
          style={{ maxWidth: "650px" }}
        >
          <BackButton />
          <h2 className="text-center fw-bold mb-4">Add Hotel</h2>

          <form onSubmit={handleAddHotel}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Hotel Name"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              required
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <input
              type="text"
              className="form-control mb-4"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />

            <button type="submit" className="btn custom-btn w-100">
              Add Hotel
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddHotel;
