import { useParams, useNavigate } from "react-router-dom";
import destinationDetails from "../data/destinationDetails";

function DestinationDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const data = destinationDetails[name];

  if (!data) {
    return (
      <div className="container py-5">
        <h2>Destination not found.</h2>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <h1 className="display-2 fw-bold">{data.name}</h1>

          <p className="lead mb-4">{data.subtitle}</p>

          <h4>⭐ {data.rating} Rating</h4>

          <div className="mt-5">
            <h3 className="fw-bold text-success">🟢 Safety Score</h3>

            <h2>{data.safetyScore} / 100</h2>

            <div
              className="progress mb-3"
              style={{ height: "15px", maxWidth: "400px" }}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: `${data.safetyScore}%` }}
              ></div>
            </div>

            <h4>{data.safetyStatus}</h4>
          </div>

          <div className="row mt-5">
            <div className="col-md-3">
              <h5>🌦 Weather</h5>
              <p>{data.weather}</p>
            </div>

            <div className="col-md-3">
              <h5>📍 District</h5>
              <p>{data.district}</p>
            </div>

            <div className="col-md-3">
              <h5>🗓 Best Time</h5>
              <p>{data.bestTime}</p>
            </div>
          </div>

          <div className="mt-5">
            <button
              className="btn custom-btn btn-lg me-3"
              onClick={() => navigate(`/hotels/${name}`)}
            >
              Book Hotels
            </button>

            <button
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate("/tour-packages")}
            >
              View Tour Packages
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationDetails;
