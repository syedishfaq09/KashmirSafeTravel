import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinationDetails from "../data/destinationDetails";

function DestinationDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const data = destinationDetails[name];
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Stop if destination does not exist
    if (!data) return;

    fetch(
      `https://kashmir-safe-travel-backend.onrender.com/api/weather/${data.name}?t=${Date.now()}`,
      {
        cache: "no-store",
      },
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((err) => console.error(err));
  }, [data]);

  // If destination is not found
  if (!data) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="card shadow-sm text-center p-5">
            <h2 className="fw-bold">Destination Not Found</h2>

            <p className="text-muted mt-3">
              Sorry, we couldn't find a destination named "{name}".
            </p>

            <button
              className="btn custom-btn mt-3"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>
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

              {weather ? (
                <>
                  <p>🌡️ {weather.current.temp_c}°C</p>
                  <p>☁️ {weather.current.condition.text}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
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
