import React from "react";
import "./ExperienceControl.css";

export const ExperienceButton = ({ title }) => {
  return (
    <div className="exp-button-outer">
      <div className="exp-button-inner">
        <text className="exp-button-title">{title}</text>
      </div>
    </div>
  );
};
