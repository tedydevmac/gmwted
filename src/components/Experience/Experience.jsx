import React from "react";
import "./Experience.css";

const Experience = ({ title, imgSrc }) => {
  return (
    <div className="experience-display-row-outer">
      <div className="experience-display-row-image">
        <img src={imgSrc} alt={title} />
        <div className="experience-display-row-title">{title}</div>
      </div>
    </div>
  );
};

export default Experience;
