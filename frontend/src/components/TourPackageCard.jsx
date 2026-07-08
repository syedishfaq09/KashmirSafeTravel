import { useNavigate } from "react-router-dom";

function TourPackageCard({ packageData }) {
  const navigate = useNavigate();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 border-0 shadow rounded-4 overflow-hidden destination-card">
        <img
          src={packageData.image}
          alt={packageData.name}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="fw-bold card-title">{packageData.name}</h5>

          <p className="text-muted">🕒 {packageData.duration}</p>

          <p className="text-muted">📍 {packageData.places}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold text-success">₹{packageData.price}</span>

            <button
              className="btn custom-btn"
              onClick={() => navigate("/login")}
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPackageCard;
