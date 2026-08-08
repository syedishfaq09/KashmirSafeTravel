import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 border-0 shadow rounded-4 overflow-hidden destination-card">
        <img
          src={hotel.image}
          alt={hotel.hotelName}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="fw-bold card-title">{hotel.hotelName}</h5>

          <p className="text-muted fw-semibold">Luxury Hotel</p>

          <p className="text-muted mb-2">📍 {hotel.location}</p>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-warning fw-bold">⭐ {hotel.rating}</span>

            <span className="fw-bold text-success">₹{hotel.price}/night</span>
          </div>

          <button
            className="btn custom-btn w-100"
            onClick={() => navigate(`/hotel/${hotel._id}`)}
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
