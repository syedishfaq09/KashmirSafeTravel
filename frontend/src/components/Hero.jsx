import heroImage from "../assets/images/hero.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="container">
        <h1 className="display-2 fw-bold">Discover the Paradise of Kashmir</h1>

        <p className="lead mt-3">
          Book Hotels • Discover Destinations • Get Safety Alerts
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-10">
            <div className="card shadow-lg p-4 border-0 rounded-4 bg-white bg-opacity-75">
              <div className="row g-2">
                {/* search button */}

                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="🔍 Search destination..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                      className="btn custom-btn"
                      onClick={() => {
                        const destination = search.trim().toLowerCase();

                        if (destination) {
                          navigate(`/destination/${destination}`);
                        } else {
                          alert("Please enter a destination.");
                        }
                      }}
                    >
                      🔍 Search
                    </button>
                  </div>
                </div>
                {/* ............................ */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            className="btn custom-btn btn-lg me-3"
            onClick={() => {
              const destination = search.trim().toLowerCase();

              if (destination) {
                navigate(`/destination/${destination}`);
              } else {
                alert("Please enter a destination.");
              }
            }}
          >
            <i className="bi bi-compass-fill me-2"></i>
            Explore Destinations
          </button>

          <button
            className="btn btn-danger btn-lg"
            onClick={() => navigate("/report-scam")}
          >
            <i className="bi bi-shield-exclamation me-2"></i>
            Report Scam
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
