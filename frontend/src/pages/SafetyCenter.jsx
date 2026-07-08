function SafetyCenter() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-3">🛡 Safety Center</h1>

      <p className="text-center text-muted mb-5">
        Stay informed and travel safely across Kashmir.
      </p>

      <div className="row">
        {/* Emergency Contacts */}

        <div className="col-md-6 mb-4">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body">
              <h3 className="fw-bold mb-4">🚨 Emergency Contacts</h3>

              <p>
                👮 Police: <strong>100</strong>
              </p>

              <p>
                🚑 Ambulance: <strong>108</strong>
              </p>

              <p>
                🔥 Fire Brigade: <strong>101</strong>
              </p>

              <p>
                🧳 Tourist Helpline:
                <strong> 1363</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Tips */}

        <div className="col-md-6 mb-4">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body">
              <h3 className="fw-bold mb-4">✅ Safety Tips</h3>

              <ul>
                <li>Travel with verified guides.</li>

                <li>Avoid isolated places at night.</li>

                <li>Carry a valid ID.</li>

                <li>Share your itinerary with family.</li>

                <li>Use registered taxis and hotels.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SafetyCenter;
