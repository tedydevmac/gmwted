import React from "react";
import "./Experience.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = ({ title, desc, imgSrc }) => {
  const images = Array.isArray(imgSrc) ? imgSrc : [imgSrc]; // Ensure imgSrc is an array

  return (
    <div className="experience-display-row-outer">
      <div className="experience-display-row-image">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="experience-image"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} ${index + 1}`}
              className="carousel-image" // Add a class for styling
              loading="lazy"
            />
          ))}
        </Carousel>
      </div>
      <div className="experience-display-row-content">
        <div className="experience-display-row-title">{title}</div>
        <div className="experience-display-row-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Experience;
