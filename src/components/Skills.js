import React from "react";

export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "MySQL",
    "Python",
    "PHP",
    "HTML/CSS/JS",
    "C/C++",
    "Excel",
    "SQL",
    "Data Structures",
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="mb-4">Skills</h2>
      <div className="row">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-6 col-md-3 mb-2">
            <span className="badge bg-info text-dark w-100">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
