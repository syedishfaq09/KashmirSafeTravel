import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import BackButton from "../components/BackButton";

function FeaturedHotels({ destination }) {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/hotels`,
        );

        const data = await response.json();

        setHotelData(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const filteredHotels = destination
    ? hotelData.filter(
        (hotel) => hotel.location.toLowerCase() === destination.toLowerCase(),
      )
    : hotelData;

  if (loading) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h4>Loading hotels...</h4>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Featured Hotels</h2>

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
            Stay at Kashmir's most trusted and verified hotels.
          </p>
        </div>

        <div className="row">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No hotels found.</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedHotels;
