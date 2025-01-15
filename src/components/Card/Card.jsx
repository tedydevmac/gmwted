import React, { useState } from "react";
import "./Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const Card = ({
  title,
  description,
  imageUrl,
  imageSrc,
  link,
  github,
  iconHover,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      <a
        href={link}
        className="image"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imageSrc}
          className={`img ${iconHover ? "hover-enabled" : ""}`}
        />
      </a>
      <div className="info">
        <i className={`icon ${imageUrl}`}></i>
        <div className="infotextcol">
          <text className="infotitle">{title}</text>
          <text className="infodesc">{description}</text>
        </div>
      </div>
      {isExpanded && (
        <div className="expanded-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};
