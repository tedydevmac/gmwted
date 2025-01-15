import React from "react";
import "./Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const Card = ({
  title,
  description,
  imageUrl,
  imageSrc,
  link,
  github,
}) => {
  return (
    <a href={github} className="card">
      <a
        href={link}
        className="image"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageSrc} className="img"></img>
      </a>
      <div className="info">
        <i className={`icon ${imageUrl}`}></i>
        <div className="infotextcol">
          <div className="infotitle">{title}</div>
          <div className="infodesc">{description}</div>
        </div>
      </div>
    </a>
  );
};
