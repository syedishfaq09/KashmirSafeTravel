import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

/* global bootstrap */

function ManageHotels() {
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState(null);

  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/hotels`,
      );

      const data = await response.json();

      setHotels(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/hotels/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        fetchHotels();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  const handleEditClick = (hotel) => {
    setSelectedHotel(hotel);

    setHotelName(hotel.hotelName);
    setLocation(hotel.location);
    setPrice(hotel.price);

    setImage(hotel.image);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/hotels/${selectedHotel._id}`,
        {
          method: "PUT",
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
        alert("✅ Hotel Updated Successfully!");

        fetchHotels();
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
        <BackButton />
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Manage Hotels</h2>

          <div>
            <button
              className="btn custom-btn me-2"
              onClick={() => navigate("/admin/add-hotel")}
            >
              + Add Hotel
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("admin");
                navigate("/admin/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Hotel</th>
              <th>Location</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel._id}>
                <td>{hotel.hotelName}</td>
                <td>{hotel.location}</td>
                <td>₹{hotel.price}</td>
                <td>{hotel.rating}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editHotelModal"
                    onClick={() => handleEditClick(hotel)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Hotel Modal */}

        <div className="modal fade" id="editHotelModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Hotel</h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Hotel Name"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>

                <button className="btn custom-btn" onClick={handleUpdate}>
                  Update Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageHotels;
