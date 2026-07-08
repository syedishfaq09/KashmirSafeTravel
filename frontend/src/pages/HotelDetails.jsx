// import { useNavigate } from "react-router-dom";

function HotelDetails() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Hotel Image */}
          <div className="col-lg-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
              alt="Hotel"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Hotel Information */}
          <div className="col-lg-6">
            <h1 className="fw-bold">The Khyber Himalayan Resort</h1>

            <p className="text-muted fs-5">Gulmarg, Jammu & Kashmir</p>

            <h3 className="text-warning">⭐ 4.9</h3>

            <h2 className="text-success my-3">₹14500 / Night</h2>

            <p className="lead">
              Experience luxury surrounded by the breathtaking mountains of
              Gulmarg. Enjoy premium rooms, beautiful scenery and world-class
              hospitality.
            </p>

            <h4 className="mt-4 mb-3">Facilities</h4>

            <ul className="list-group mb-4">
              <li className="list-group-item">✅ Free Wi-Fi</li>
              <li className="list-group-item">✅ Restaurant</li>
              <li className="list-group-item">✅ Free Parking</li>
              <li className="list-group-item">✅ Room Service</li>
              <li className="list-group-item">✅ Mountain View</li>
            </ul>

            <button
              className="btn custom-btn btn-lg"
              onClick={() => navigate("/login")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelDetails;
