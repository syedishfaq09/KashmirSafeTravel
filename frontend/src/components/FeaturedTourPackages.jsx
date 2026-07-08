import tourPackages from "../data/tourPackages";
import TourPackageCard from "./TourPackageCard";

function FeaturedTourPackages() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Featured Tour Packages</h2>

          <div
            className="mx-auto my-3"
            style={{
              width: "70px",
              height: "4px",
              background: "#6f42c1",
              borderRadius: "10px",
            }}
          ></div>

          <p className="text-muted">
            Explore Kashmir with our most popular tour packages.
          </p>
        </div>

        {/* Tour Package Cards */}
        <div className="row">
          {tourPackages.map((packageData) => (
            <TourPackageCard key={packageData.id} packageData={packageData} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-5">
          <button className="btn custom-btn me-3">View All Packages →</button>

          <button className="btn btn-outline-primary">Search Packages →</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTourPackages;
