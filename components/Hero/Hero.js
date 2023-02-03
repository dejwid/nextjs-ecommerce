import React, { useState } from "react";
import Image from "next/image";
import SlideOne from "./Slides/SlideOne";
import SlideThree from "./Slides/SlideThree";
import SlideTwo from "./Slides/SlideTwo";

function Hero(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const slides = [
    <SlideOne key={"key"} />,
    <SlideTwo key={"key"} />,
    <SlideThree key={"key"} />,
  ];
  return (
    <div
      data-delay="4000"
      data-animation="cross"
      className="hero-slider w-slider"
      data-autoplay="false"
      data-easing="ease"
      data-hide-arrows="false"
      data-disable-swipe="false"
      data-w-id="79d4d70d-5049-009b-9ab3-224fd6a2af3c"
      data-autoplay-limit="0"
      data-nav-spacing="3"
      data-duration="800"
      data-infinite="true"
      id="Hero"
    >
      <div className="w-slider-mask">{slides[currentSlide]}</div>
      <div className="slider-arrow-link w-slider-arrow-left">
        <div className="slider-arrow-button">
          <a className="slider-arrow-icon-1" onClick={handlePrevClick}>
            {" "}
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/arrow-left.svg"
              alt=""
              className="slider-arrow-icon-1"
            />
          </a>
          <a className="slider-arrow-icon-2" onClick={handlePrevClick}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/arrow-left-white.svg"
              alt=""
              className="slider-arrow-icon-2"
            />
          </a>
        </div>
      </div>
      <div className="slider-arrow-link w-slider-arrow-right">
        <div className="slider-arrow-button">
          <button onClick={handleNextClick} className="slider-arrow-icon-1">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/arrow-right.svg"
              alt=""
              className="slider-arrow-icon-1"
            />
          </button>
          <button onClick={handleNextClick} className="slider-arrow-icon-2">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/arrow-right-white.svg"
              alt=""
              className="slider-arrow-icon-2"
            />
          </button>
        </div>
      </div>
      <div className="hero-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
    </div>
  );
}

export default Hero;
