import destinations from "../data/destinations";
import DestinationCard from "./DestinationCard";

function PopularDestinations() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Popular Destinations</h2>

          <p className="text-muted">
            Discover Kashmir's most loved tourist attractions.
          </p>
        </div>

        <div className="row">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
