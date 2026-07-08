import FeaturedTourPackages from "../components/FeaturedTourPackages";

function TourPackages() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Kashmir Tour Packages</h1>

          <p className="lead text-muted">
            Explore verified and affordable tour packages across Kashmir.
          </p>
        </div>
      </section>

      <FeaturedTourPackages />
    </>
  );
}

export default TourPackages;
