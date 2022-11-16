import React, { useState } from "react";
import "../LogementData/Logement.json";
import "./Carrousel.css";

//Carrousel creation

export default function Carrousel({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? slides.length - 1 : currentImage - 1);
  };

  const previousArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      class="bi bi-chevron-left"
      viewBox="0 0 16 16"
    >
      <path
        
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );

  const nextSlide = () => {
    setCurrentImage(currentImage === slides.length - 1 ? 0 : currentImage + 1);
  };

  const nextArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      class="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
      
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  return (
    <div className="Carrousel">
      <div className="containerArrow">
        <button onClick={previousSlide} className="previousButton">
          {previousArrow}
        </button>

        <button onClick={nextSlide} className="nextButton">
          {nextArrow}
        </button>
      </div>
      {slides.map((slide, index) => {
        return (
          <div className="SliderImage">
            {index === currentImage && (
              <img key={slide} className="imageSlide" src={slide} />
            )}
          </div>
        );
      })}
    </div>
  );
}
