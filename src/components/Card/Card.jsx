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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? (
        singleImage ? (
          <img
            src={`/_vercel/image?url=${images[0]}&w=200&q=70`}
            alt={imageSrc}
            className={`img single`}
          ></img>
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
              <div key={index}>
                <img
                  src={`/_vercel/image?url=${imgSrc}&w=200&q=70`}
                  alt={imageSrc}
                  className={`img ${tooBig ? "scaledown" : ""}`}
                />
              </div>
            ))}
          </Carousel>
        )
      ) : (
        <a
          href={link}
          className="image"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`/_vercel/image?url=${imageSrc}&w=200&q=70`}
            className={`img ${iconHover ? "hover-enabled" : ""}`}
          />
        </a>
      )}
      <div
        className={`info ${isExpanded ? "expanded" : ""}`}
        onClick={handleCardClick}
      >
        {isExpanded ? (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className={`github fa-brands fa-github`} />
          </a>
        ) : (
          <i className={`icon ${imageUrl}`}></i>
        )}
        <div className="infotextcol">
          <text className={`infotitle ${isExpanded ? "cardtitle" : ""}`}>
            {title}
          </text>
          <text className={`infodesc ${isExpanded ? "carddesc" : ""}`}>
            {isExpanded ? expanddesc : description}
          </text>
        </div>
      </div>
    </div>
  );
};
