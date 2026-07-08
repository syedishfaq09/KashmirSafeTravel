import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card destination-card h-100 border-0 shadow rounded-4 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h4 className="fw-bold">{destination.name}</h4>

          <p className="text-muted mb-2">📍 {destination.location}</p>

          <p className="small text-secondary">{destination.description}</p>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-warning">
              ⭐ {destination.rating}
            </span>

            <Link
              to={`/destination/${destination.id}`}
              className="btn custom-btn"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
