import { Link } from "react-router-dom";

function BookingSuccess() {
  const bookingId = `KST-${Math.floor(100000 + Math.random() * 900000)}`;
  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mx-auto text-center shadow rounded-4 p-5"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-success mb-3">🎉 Booking Confirmed!</h1>

          <p className="lead">Thank you for choosing Kashmir Safe Travel.</p>

          <h4 className="my-4">
            Booking ID: <span className="text-primary">{bookingId}</span>
          </h4>

          <p className="text-muted">
            Our team will contact you shortly to confirm your booking.
          </p>

          <Link to="/" className="btn custom-btn mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingSuccess;
