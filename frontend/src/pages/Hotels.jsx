import { useState } from "react";
import { useParams } from "react-router-dom";
import FeaturedHotels from "../components/FeaturedHotels";

function Hotels() {
  const { destination } = useParams();

  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(search.trim());
  };

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

          {/* Hotel Search */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="🔍 Search hotel or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />

                <button
                  className="btn custom-btn px-4"
                  type="button"
                  onClick={handleSearch}
                >
                  🔍 Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedHotels destination={destination} searchQuery={searchQuery} />
    </>
  );
}

export default Hotels;
