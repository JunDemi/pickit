import React from 'react';
import { PopularRank } from 'components/common/RankList';
import BannerVideo from '../../assets/images/video/WELCOME TO PICKIT.mp4';
import '../../assets/styles/Banner.scss';

function Banner() {
  return (
    <div className="Banner-container">
      <div className="popular-chartBox">
        <PopularRank />
      </div>

      <div className="Banner-slider">
        <video src={BannerVideo} autoPlay muted loop />
      </div>
    </div>
  );
}

export default Banner;
