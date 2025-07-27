import React from "react";

export default function Projects() {
  const data = [
    {
      title: "Sales Data Analysis",
      tech: "Excel, SQL",
      desc: "Analyzed structured sales data for trends and KPIs.",
      link: "https://sql-analytics-dashboard.vercel.app/",
    },
    {
      title: "Heart Disease Prediction",
      tech: "Python, Scikit-learn",
      desc: "Built a machine learning model with UI to predict disease risks.",
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
      <div className="row">
        {data.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card bg-secondary text-white h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning text-decoration-none"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h5>
                <p className="card-text">
                  <strong>Tech:</strong> {project.tech}
                </p>
                <p className="card-text">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
