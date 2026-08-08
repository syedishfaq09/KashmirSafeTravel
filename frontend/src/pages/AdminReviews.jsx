import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/reviews/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        alert("Review deleted successfully!");

        setReviews((prevReviews) =>
          prevReviews.filter((review) => review._id !== id),
        );
      } else {
        alert(data.message || "Failed to delete review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Could not connect to the server. Please try again.");
    }
  };

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

                <div className="text-muted small">
                  Reviewed on:{" "}
                  {new Date(review.reviewDate).toLocaleDateString("en-GB")}
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete Review
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default AdminReviews;
