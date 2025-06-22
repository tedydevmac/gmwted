import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  images,
  expanddesc,
  tooBig,
  singleImage,
  skills = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Helper to assign color class based on skill
  const getSkillType = (skill) => {
    const s = skill.toLowerCase();
    if (
      [
        "react",
        "react native",
        "flutter",
        "html5",
        "css3",
        "ui/ux",
        "web development",
        "360° media",
        "deployment",
        "chrome extension",
        "interactive",
        "photobooth",
      ].some((k) => s.includes(k))
    )
      return "frontend";
    if (
      [
        "node.js",
        "django",
        "flask",
        "mongodb",
        "api integration",
        "api development",
        "full stack",
        "backend",
      ].some((k) => s.includes(k))
    )
      return "backend";
    if (
      [
        "python",
        "data",
        "ai",
        "machine learning",
        "natural language processing",
        "computer vision",
        "data analysis",
        "astronomy",
        "space science",
      ].some((k) => s.includes(k))
    )
      return "data";
    if (
      ["firebase", "devops", "deployment", "iot", "sensor"].some((k) =>
        s.includes(k)
      )
    )
      return "devops";
    if (
      [
        "teamwork",
        "collaboration",
        "leadership",
        "learning",
        "innovation",
        "competition",
        "hackathon",
        "problem solving",
        "inclusivity",
        "sustainability",
      ].some((k) => s.includes(k))
    )
      return "soft";
    if (["android", "mobile app", "mobile", "ios"].some((k) => s.includes(k)))
      return "mobile";
    if (["web", "website"].some((k) => s.includes(k))) return "web";
    return "other";
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      {isExpanded && (
        <button
          className="close-modal-btn"
          onClick={() => setIsExpanded(false)}
        >
          <i className="fa-solid fa-xmark" aria-label="Close"></i>
        </button>
      )}
      {isExpanded ? (
        singleImage ? (
          <div className="single-image-container">
            <img
              src={images[0]}
              alt={imageSrc}
              className={`img single contain`}
              loading="lazy"
            ></img>
          </div>
        ) : (
          <Carousel
            className={`image extend`}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
            showArrows={tooBig ? true : false}
            showThumbs={tooBig ? false : true}
            showStatus={false}
          >
            {images.map((imgSrc, index) => (
              <div key={index} className="carousel-image-container">
                <img
                  src={imgSrc}
                  alt={imageSrc}
                  className={`img contain`}
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        )
      ) : (
        <div className="image">
          <img
            src={imageSrc}
            className={`img round-rectangle contain`}
            style={{ padding: "4%", margin: "0 auto", display: "block" }}
          />
        </div>
      )}
      <div
        className={`info ${isExpanded ? "expanded" : ""}`}
        onClick={isExpanded ? undefined : handleCardClick}
        style={{
          padding: isExpanded ? "18px 48px 12px 48px" : "12px 24px",
          gap: isExpanded ? "2.1%" : "5.1%",
        }}
      >
        {isExpanded ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className={`github fa-brands fa-github`} />
            </a>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="deployment-link"
              >
                <i className="deployment fa-solid fa-arrow-up-right-from-square" />
              </a>
            )}
          </div>
        ) : (
          <i className={`icon ${imageUrl}`}></i>
        )}
        <div className="infotextcol" style={{ gap: isExpanded ? 12 : 8 }}>
          <span
            className={`infotitle ${isExpanded ? "cardtitle" : ""}`}
            style={{
              fontSize: isExpanded ? 24 : 18,
              lineHeight: isExpanded ? "32px" : "24px",
              marginBottom: 4,
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
          >
            {title}
          </span>
          <span
            className={`infodesc ${isExpanded ? "carddesc" : ""}`}
            style={{
              fontSize: isExpanded ? 18 : 16,
              lineHeight: "24px",
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
          >
            {isExpanded
              ? expanddesc.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : description}
          </span>
        </div>
      </div>
      {skills && skills.length > 0 && (
        <div
          className="internship-tech"
          style={{
            marginTop: isExpanded ? 24 : 12,
            marginBottom: isExpanded ? 24 : 8,
            padding: isExpanded ? "0 48px" : "0 24px",
          }}
        >
          <div className="tech-tags">
            {skills.map((skill, idx) => (
              <span key={idx} className={`tech-tag ${getSkillType(skill)}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      {!isExpanded && (
        <button
          className="see-what-i-made-btn"
          onClick={() => setIsExpanded(true)}
          style={{ margin: "16px auto 12px auto", padding: "10px 28px" }}
        >
          Learn More
        </button>
      )}
    </div>
  );
};
