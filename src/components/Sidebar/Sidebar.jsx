import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className={`sidebar ${className}`}>
        <a href="#home" className="icon-link" data-text="About Me">
          <i className="fas fa-user"></i> {/* Font Awesome icon */}
        </a>
        <a href="#experiences" className="icon-link" data-text="Experiences">
          <i className="fa-solid fa-life-ring"></i>{" "}
        </a>
        <a href="#internships" className="icon-link" data-text="Work">
          <i className="fa-solid fa-briefcase"></i>{" "}
        </a>
        <a href="#notice" className="icon-link" data-text="Projects">
          <i className="fa-solid fa-diagram-project"></i>{" "}
        </a>
        <a href="#contact" className="icon-link" data-text="Contact Me">
          <i className="fas fa-envelope"></i> {/* Font Awesome icon */}
        </a>
      </div>
    </div>
  );
};
