import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mx-auto shadow rounded-4 p-5"
          style={{ maxWidth: "700px" }}
        >
          <BackButton />
          <h2 className="text-center fw-bold mb-5">Admin Dashboard</h2>

          <div className="d-grid gap-3">
            <button
              className="btn custom-btn"
              onClick={() => navigate("/admin/manage-hotels")}
            >
              Manage Hotels
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/admin/reviews")}
            >
              Manage Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
