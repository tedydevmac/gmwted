import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className={`sidebar ${className}`}>
        <a href="#about" className="icon-link">
          <i className="fas fa-home"></i> {/* Font Awesome icon */}
        </a>
        <a href="#projects" className="icon-link">
          <i className="fas fa-user"></i> {/* Font Awesome icon */}
        </a>
        <a href="#footer" className="icon-link">
          <i className="fas fa-envelope"></i> {/* Font Awesome icon */}
        </a>
      </div>
    </div>
  );
};
