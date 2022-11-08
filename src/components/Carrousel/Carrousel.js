import "../Cards/Logement.json";
import "./Carrousel.css";

import React, { useState } from "react";

export default function Carrousel({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(currentImage === slides.length - 1 ? 0 : currentImage + 1);
  };

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? slides.length - 1 : currentImage - 1);
  };

  return (
  <div className="Carrousel">
   {
    slides.map((slide,index) =>{
      return (
        <div className="carrouselContainer">
         {index === currentImage && (
           <img className="Image" src={slide} />
         )}
        </div>
      )
    })
   }
  </div>
  )
}
