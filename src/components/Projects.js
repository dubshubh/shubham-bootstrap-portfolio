import React from "react";

export default function Projects() {
  const data = [
    {
      title: "Heart Disease Prediction",
      tech: "Python, Scikit-learn",
      desc: "Built a machine learning model with UI to predict disease risks.",
    },
    {
      title: (
        <a
          href="https://sql-analytics-dashboard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sales Data Analysis
        </a>
      ),
      tech: "Excel, SQL",
      desc: "Analyzed structured sales data for trends and KPIs.",
    },
    {
      title: "Online Voting System",
      tech: "React.js, Node.js, MySQL",
      desc: "Secure platform with real-time vote updates and admin control.",
    },
    {
      title: "Car Rental System",
      tech: "React.js, Node.js, MySQL",
      desc: "Booking app with login, payment gateway, and admin dashboard.",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {data.map((p, idx) => (
          <div key={idx} className="col-md-6">
            <div className="card bg-secondary text-white h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <h6 className="card-subtitle mb-2 text-warning">{p.tech}</h6>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
