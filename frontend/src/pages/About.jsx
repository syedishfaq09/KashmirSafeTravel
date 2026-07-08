function About() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Kashmir Safe Travel</h1>

          <p className="lead text-muted">
            Your trusted travel companion for exploring Kashmir safely.
          </p>
        </div>

        <div className="card shadow border-0 rounded-4 p-4">
          <h3 className="fw-bold mb-3">Our Mission</h3>

          <p>
            Kashmir Safe Travel is a travel platform designed to help tourists
            discover beautiful destinations, book trusted hotels, explore tour
            packages, and access important safety information in one place.
          </p>

          <h3 className="fw-bold mt-4 mb-3">What We Offer</h3>

          <ul>
            <li>Verified Hotels</li>
            <li>Tour Packages</li>
            <li>Destination Information</li>
            <li>Safety Scores</li>
            <li>Emergency Contacts</li>
            <li>Scam Reporting</li>
          </ul>

          <h3 className="fw-bold mt-4 mb-3">Our Vision</h3>

          <p>
            To make Kashmir one of the safest and most trusted travel
            destinations through technology and reliable travel information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
