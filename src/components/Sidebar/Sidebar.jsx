import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className={`sidebar ${className}`}>
        <a href="#home" className="icon-link" data-text="Home">
          <i className="fas fa-home"></i> {/* Font Awesome icon */}
        </a>
        <a href="#about" className="icon-link" data-text="About Me">
          <i className="fas fa-user"></i> {/* Font Awesome icon */}
        </a>
        <a href="#projects" className="icon-link" data-text="Projects">
          <i className="fa-solid fa-diagram-project"></i>{" "}
        </a>
        <a href="#contact" className="icon-link" data-text="My Contact">
          <i className="fas fa-envelope"></i> {/* Font Awesome icon */}
        </a>
      </div>
    </div>
  );
};
