import React from "react";
import "./Footer.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <p className="brought-to-you-be">
        <span className="text-wrapper">Design taken from </span>

        <a href="https://once-ui.com" rel="noopener noreferrer" target="_blank">
          <span className="span">Figma Community</span>
        </a>
      </p>

      <p className="created-by-lorant">
        <span className="text-wrapper-2">Website created by </span>

        <a
          href="https://www.linkedin.com/in/tothlorant/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-wrapper-3">Yours truly</span>
        </a>
      </p>
    </div>
  );
};
