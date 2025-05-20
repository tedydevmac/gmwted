import React from "react";
import "./ExperienceControl.css";

export const ExperienceButton = ({ title, onClick }) => {
  return (
    <div className="exp-button-outer" onClick={onClick}>
      <div className="exp-button-inner">
        <span className="exp-button-title">{title}</span>
      </div>
    </div>
  );
};
