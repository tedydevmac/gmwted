import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import VideoModal from "./VideoModal";

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
  // Dedicated video modal state
  const [videoModal, setVideoModal] = useState({
    open: false,
    src: null,
    poster: null,
    title: null,
  });

  // Cleanup video modal on unmount
  useEffect(() => {
    return () => {
      setVideoModal({ open: false, src: null, poster: null, title: null });
    };
  }, []);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    setVideoModal({ open: false, src: null, poster: null, title: null });
  };

  // Helper to assign color class based on skill
  const getSkillType = (skill) => {
    const s = skill.toLowerCase();
    // Frontend
    if (
      [
        "react",
        "react native",
        "flutter",
        "html",
        "html5",
        "css",
        "css3",
        "ui/ux",
        "web development",
        "360° media",
        "chrome extension",
        "interactive",
        "photobooth",
        "web",
        "website",
        "interactive web app",
      ].some((k) => s.includes(k))
    )
      return "frontend";
    // Backend
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
        "apis",
      ].some((k) => s.includes(k))
    )
      return "backend";
    // Data Science & AI
    if (
      [
        "python",
        "data",
        "ai",
        "machine learning",
        "ml",
        "natural language processing",
        "computer vision",
        "data analysis",
        "astronomy",
        "space science",
        "pandas",
        "scikit-learn",
        "numpy",
        "tensorflow",
        "pytorch",
        "opencv",
        "streamlit",
      ].some((k) => s.includes(k))
    )
      return "data";
    // DevOps & Hardware
    if (
      [
        "firebase",
        "devops",
        "deployment",
        "iot",
        "sensor",
        "sensors",
        "arduino",
        "hardware-software integration",
        "embedded systems",
      ].some((k) => s.includes(k))
    )
      return "devops";
    // Mobile
    if (
      [
        "android",
        "mobile app",
        "mobile",
        "ios",
        "cross-platform",
        "swift",
        "swiftui",
        "dart",
      ].some((k) => s.includes(k))
    )
      return "mobile";
    // Soft skills
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
        "health & fitness",
      ].some((k) => s.includes(k))
    )
      return "soft";
    return "other";
  };

  // Helper to render a video thumbnail with play button overlay
  const renderVideoThumbnail = (media, idx) => (
    <div
      className="video-thumbnail-container"
      style={{ position: "relative", width: "100%", height: "100%" }}
      onClick={() =>
        setVideoModal({
          open: true,
          src: media.src,
          poster: media.poster,
          title,
        })
      }
    >
      <img
        src={media.poster || undefined}
        alt="video thumbnail"
        className="img contain"
        style={{ filter: "brightness(0.7)", cursor: "pointer" }}
        loading="lazy"
        onError={(e) => {
          // fallback: if poster is not available, use a generic placeholder
          e.target.onerror = null;
          e.target.src = "/assets/logos/play-placeholder.png";
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: 64,
          pointerEvents: "none",
        }}
      >
        <i
          className="fa-solid fa-circle-play"
          style={{ filter: "drop-shadow(0 0 8px #000)" }}
        ></i>
      </div>
    </div>
  );

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      {isExpanded && (
        <button className="close-modal-btn" onClick={() => handleCardClick()}>
          <i className="fa-solid fa-xmark" aria-label="Close"></i>
        </button>
      )}
      {isExpanded ? (
        singleImage ? (
          <div className="single-image-container">
            {images[0]?.type === "video" ? (
              renderVideoThumbnail(images[0], 0)
            ) : (
              <img
                src={images[0]?.src || images[0]}
                alt={imageSrc}
                className={`img single contain`}
                loading="lazy"
              />
            )}
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
            renderThumbs={() =>
              images.map((media, idx) =>
                media.type === "video" && media.poster ? (
                  <img
                    key={idx}
                    src={media.poster}
                    alt="video thumbnail"
                    className="carousel-thumb"
                  />
                ) : (
                  <img
                    key={idx}
                    src={media.src || media}
                    alt="carousel thumbnail"
                    className="carousel-thumb"
                  />
                )
              )
            }
          >
            {images.map((media, index) => (
              <div key={index} className="carousel-image-container">
                {media.type === "video" ? (
                  renderVideoThumbnail(media, index)
                ) : (
                  <img
                    src={media.src || media}
                    alt={imageSrc}
                    className={`img contain`}
                    loading="lazy"
                  />
                )}
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
            loading="lazy"
          />
        </div>
      )}
      <VideoModal
        open={videoModal.open}
        onClose={() =>
          setVideoModal({ open: false, src: null, poster: null, title: null })
        }
        src={videoModal.src}
        poster={videoModal.poster}
        title={videoModal.title}
      />
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
