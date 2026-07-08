import { useParams } from "react-router-dom";
import FeaturedHotels from "../components/FeaturedHotels";

function Hotels() {
  const { destination } = useParams();
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">
              {destination
                ? `${destination.charAt(0).toUpperCase() + destination.slice(1)} Hotels`
                : "Find Your Stay"}
            </h1>

            <p className="text-muted">
              Choose from trusted and verified hotels across Kashmir.
            </p>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="🔍 Search hotels..."
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedHotels destination={destination} />
    </>
  );
}

export default Hotels;
