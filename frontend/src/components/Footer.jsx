function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        {/* Newsletter */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h3 className="fw-bold">Stay Updated</h3>

            <p className="text-light-emphasis mb-0">
              Subscribe to receive travel offers, destination updates, and
              important safety alerts across Kashmir.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="input-group input-group-lg">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <button className="btn custom-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="border-secondary mb-5" />

        <div className="row">
          {/* Brand */}
          <div className="col-lg-4 mb-4">
            <h4 className="fw-bold">🏔 Kashmir Safe Travel</h4>

            <p className="text-light-emphasis">
              Discover Kashmir with confidence. Book verified hotels, trusted
              tour packages, and travel safely with real-time information.
            </p>

            <h6 className="fw-bold mt-4 mb-3">Follow Us</h6>

            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  🏠 Home
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-light">
                  📍 Destinations
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-light">
                  🏨 Hotels
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-light">
                  🧳 Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Safety */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Safety</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Safety Map
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-light">
                  Scam Reporting
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-light">
                  Emergency Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>

            <p>📧 syedishfaq4747@gmail.com</p>

            <p>📞 +91 7889432697</p>

            <p>📍 Pulwama, Jammu & Kashmir</p>
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
