import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/reviews/admin/all`,
        );

        const data = await response.json();

        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <BackButton />

        <h2 className="fw-bold mb-4">Manage Reviews</h2>

        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="card mb-3 shadow-sm border-0 rounded-4"
            >
              <div className="card-body">
                <h5 className="fw-bold">{review.userName}</h5>

                <p className="mb-2">⭐ {review.rating} Stars</p>

                <p className="mb-2">{review.comment}</p>

                <small className="text-muted">
                  Reviewed on:{" "}
                  {new Date(review.reviewDate).toLocaleDateString("en-GB")}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default AdminReviews;
