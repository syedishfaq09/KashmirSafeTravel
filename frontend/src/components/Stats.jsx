const stats = [
  {
    icon: "bi-building",
    color: "text-primary",
    number: "250+",
    title: "Verified Hotels",
    description: "Quality stays across Kashmir",
  },
  {
    icon: "bi-geo-alt-fill",
    color: "text-success",
    number: "80+",
    title: "Tourist Places",
    description: "Explore famous destinations",
  },
  {
    icon: "bi-shield-check",
    color: "text-danger",
    number: "500+",
    title: "Safety Reports",
    description: "Helping travelers stay safe",
  },
  {
    icon: "bi-star-fill",
    color: "text-warning",
    number: "4.9",
    title: "User Rating",
    description: "Trusted by thousands",
  },
];
function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row justify-content-center">
          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="stat-card text-center p-4">
                <i className={`bi ${item.icon} fs-1 ${item.color}`}></i>

                <h2 className="mt-3 fw-bold">{item.number}</h2>

                <h5>{item.title}</h5>

                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
