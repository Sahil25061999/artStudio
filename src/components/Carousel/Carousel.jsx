import React from 'react';
import CarouselImage from '../../assets/image/carouselImage/homecarousel3.webp';
import './Carousel.css';

export const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        <img className="carousel-bg-img" src={CarouselImage} alt="" />
      </div>

      <h1 className="carousel-video-title">
        Sand of times | Abstract art launch event.
      </h1>
      <button className="carousel-watch-btn btn btn-white">Watch Now</button>
    </div>
  );
};
