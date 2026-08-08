import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HotelDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  const [reviews, setReviews] = useState([]);

  // const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hotelId: id,
            userName: user.name,
            rating,
            comment,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("Review submitted successfully!");

        setReviews([...reviews, data]);

        setRating(5);
        setComment("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Server Error");
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/reviews/${id}`,
        );
        const data = await response.json();

        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

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

          {/* Write a Review */}
          {user ? (
            <div className="mt-5">
              <h3 className="fw-bold mb-4">Write a Review</h3>

              <form
                onSubmit={handleReviewSubmit}
                className="card p-4 shadow-sm"
              >
                <p className="fw-semibold mb-3">
                  Reviewing as:{" "}
                  <span className="text-primary">{user.name}</span>
                </p>

                <select
                  className="form-select mb-3"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                  <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                  <option value="3">⭐⭐⭐ 3 Stars</option>
                  <option value="2">⭐⭐ 2 Stars</option>
                  <option value="1">⭐ 1 Star</option>
                </select>

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Write your review..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>

                <button type="submit" className="btn custom-btn">
                  Submit Review
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-5 text-center">
              <h4 className="fw-bold">Want to write a review?</h4>
              <p className="text-muted">
                Please login to share your experience.
              </p>

              <button
                className="btn custom-btn"
                onClick={() => navigate("/login")}
              >
                Login to Review
              </button>
            </div>
          )}

          {/* Reviews */}
          <div className="mt-5">
            <h3 className="fw-bold mb-4">Guest Reviews</h3>

            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review._id} className="card shadow-sm mb-3 p-4">
                  <h5 className="fw-bold">{review.userName}</h5>

                  <p className="text-muted mb-2">
                    📅 Reviewed on:{" "}
                    {new Date(review.reviewDate).toLocaleDateString("en-GB")}
                  </p>

                  <p className="text-warning fs-5">
                    {"⭐".repeat(review.rating)}
                  </p>

                  <p className="fst-italic mb-0">"{review.comment}"</p>
                </div>
              ))
            ) : (
              <p className="text-muted">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelDetails;
