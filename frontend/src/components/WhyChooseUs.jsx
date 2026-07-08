const features = [
  {
    icon: "bi-shield-check",
    color: "text-success",
    title: "Verified Hotels",
    text: "Only trusted and verified hotels for a safe and comfortable stay.",
  },
  {
    icon: "bi-geo-alt",
    color: "text-primary",
    title: "Smart Safety Map",
    text: "Find safe routes and stay updated with real-time safety information.",
  },
  {
    icon: "bi-exclamation-triangle",
    color: "text-danger",
    title: "Scam Reporting",
    text: "Report suspicious activities and help keep other travelers safe.",
  },
  {
    icon: "bi-people",
    color: "text-warning",
    title: "Trusted Community",
    text: "Thousands of travelers rely on Kashmir Safe Travel every year.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Why Choose Us?</h2>

          <div
            className="mx-auto my-3"
            style={{
              width: "70px",
              height: "4px",
              background: "#6f42c1",
              borderRadius: "10px",
            }}
          ></div>

          <p className="text-muted">
            We are committed to making your Kashmir journey safe, comfortable
            and memorable.
          </p>
        </div>

        <div className="row">
          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center feature-card">
                <i className={`bi ${item.icon} fs-1 ${item.color} mb-3`}></i>

                <h4 className="fw-bold">{item.title}</h4>

                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
