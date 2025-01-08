import { useEffect, useState } from "react";

import image1 from "../assets/polimento-farol.png";
import image2 from "../assets/polimento.png";
import image3 from "../assets/servico.png";

import "./Carousel.css";

const images = [image1, image2, image3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Muda o slide a cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const hadleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={hadleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="carousel-pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-bullet ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
