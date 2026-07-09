function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        {/* Stay Updated */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Stay Updated</h2>

          <p
            className="text-light-emphasis mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Subscribe to receive travel offers, destination updates, and
            important safety alerts across Kashmir.
          </p>

          <div
            className="input-group input-group-lg mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

            <button className="btn custom-btn">Subscribe</button>
          </div>
        </div>

        <hr className="border-secondary mb-5" />

        {/* Follow Us & Contact */}
        <div className="row text-center text-lg-start">
          {/* Follow Us */}
          <div className="col-lg-6 mb-4">
            <h3 className="fw-bold mb-4">Follow Us</h3>

            <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-2">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-6 mb-4">
            <h3 className="fw-bold mb-4">Contact</h3>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              syedishfaq4747@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 7889432697
            </p>

            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Pulwama, Jammu & Kashmir
            </p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} Kashmir Safe Travel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
