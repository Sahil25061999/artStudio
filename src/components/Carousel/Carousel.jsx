import React from 'react';
import thumbnailSrc from '../../assets/image/videoCard/11.jpg';
import './Carousel.css';

export const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        {/* <img className="carousel-bg-img" src={thumbnailSrc} alt="" /> */}
        <iframe
          src="https://www.youtube.com/embed/OQj52ojnlk8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h1 className="carousel-video-title">
        Greed makes one's lose their mind | Tumbbad | Horror Scene | Sohum Shah,
        Mohammad Samadn
      </h1>
      <button className="carousel-watch-btn btn btn-white">Watch Now</button>
    </div>
  );
};
