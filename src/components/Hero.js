import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
        style={{
          background: "linear-gradient(90deg, #0d0d0d, #1a1a1a, #0d0d0d)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            <span style={{ color: "#0dcaf0" }}>Shubham</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {["home", "about", "projects", "skills", "contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link text-white mx-2 px-2"
                    href={`#${item}`}
                    style={{
                      transition: "color 0.2s ease-in-out",
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 bg-dark text-white"
      >
        <img
          src="/profile.jpg"
          alt="Shubham Dubey"
          className="rounded-circle mb-4"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            border: "3px solid white",
          }}
        />
        <h1 className="display-4 fw-bold">Hi, I'm Shubham Dubey</h1>
        <p className="lead">
          Front-End Developer | Back-End Developer | Data Analyst
        </p>
        <div className="d-flex gap-4 mb-4">
          <a
            href="https://github.com/dubshubh"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shubham-dubey-b54886246"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-3"
          >
            <FaLinkedin />
          </a>
        </div>
        <a href="/resume.pdf" download className="btn btn-primary">
          Download Resume
        </a>
      </section>
    </>
  );
}
