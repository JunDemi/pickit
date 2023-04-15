import React from 'react';
import { PopularRank } from 'components/common/RankList';
import BannerVideo from '../../assets/images/video/WELCOME TO PICKIT.mp4';
import '../../assets/styles/Banner.scss';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

function Banner() {
  return (
    <div className="Banner-container">
      <div className="popular-chartBox">
        <PopularRank />
      </div>

      <section className="Notice-Slider">
        <article className="Notice-Index">
          <div className="Index-titleBox">
            <div className="Index-icon">
              <HiOutlineSpeakerphone />
            </div>

            <div className="Index-title">
              <h2>공지사항</h2>
            </div>
          </div>

          <div className="Notice-titleBox">
            <div className="Notice-title">
              <h2>[버그수정] 월드컵 생성 UI 수정</h2>
            </div>
            <div className="Notice-Date">
              <span>2023.04.15</span>
            </div>
          </div>

          <div className="View-More">
            <span>+ 더보기</span>
          </div>
        </article>

        <article className="Banner-slider">
          <video src={BannerVideo} autoPlay muted loop />
        </article>
      </section>
    </div>
  );
}

export default Banner;
