import React from "react";
import "./InternshipCard.css";

const InternshipCard = ({
  title,
  period,
  company,
  description,
  technologies,
  imgSrc,
  index,
}) => {
  return (
    <div className="internship-card" style={{ "--index": index }}>
      <div className="internship-header">
        <div className="internship-logo-container">
          <img
            src={imgSrc}
            alt={company}
            className="internship-logo"
            loading="lazy"
          />
        </div>
        <div className="internship-title-section">
          <h2 className="internship-title">{title}</h2>
          <div className="internship-subtitle">
            {company} | {period}
          </div>
        </div>
      </div>

      <div className="internship-content">
        <p className="internship-description">{description}</p>

        <div className="internship-tech">
          <div className="tech-title">Skills:</div>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
