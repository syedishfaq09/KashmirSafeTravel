import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("admin", "true");

        alert("✅ Admin Login Successful");

        navigate("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mx-auto shadow rounded-4 p-5"
          style={{ maxWidth: "450px" }}
        >
          <BackButton />
          <form onSubmit={handleLogin}>
            <h2 className="text-center fw-bold mb-4">Admin Login</h2>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn custom-btn w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
