import { useNavigate } from "react-router-dom";

function ReportScam() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your report has been submitted.");

    navigate("/");
  }

  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      <h1 className="fw-bold text-center mb-3">🚨 Report a Scam</h1>

      <p className="text-center text-muted mb-5">
        Help other travelers by reporting suspicious activities.
      </p>

      <form
        className="card shadow border-0 rounded-4 p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Your Name</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>

          <input
            type="text"
            className="form-control"
            placeholder="Where did it happen?"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Describe the Incident</label>

          <textarea
            className="form-control"
            rows="4"
            placeholder="Write a short description..."
            required
          ></textarea>
        </div>

        <button className="btn custom-btn w-100">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportScam;
