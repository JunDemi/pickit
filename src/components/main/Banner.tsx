import '../../assets/styles/Banner.scss';
import BannerVideo from '../../assets/images/video/WELCOME TO PICKIT.mp4';
import React from 'react';

function Banner() {
  return (
    <div className="Banner-container">
      <div className="popular-chartBox"></div>

      <div className="Banner-slider">
        <video src={BannerVideo} autoPlay muted loop />
      </div>
    </div>
  );
}

export default Banner;
