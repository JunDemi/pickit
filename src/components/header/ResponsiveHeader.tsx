import React from 'react';
import '../../assets/styles/Header/ResponsiveHeader.scss';
import { stateRule } from '../../routes/Home';
import { IoClose } from 'react-icons/io5';
import { BsFillBellFill } from 'react-icons/bs';
import profileImg from '../../assets/images/yuna.jpg';
import {
  AiFillNotification,
  AiOutlineSearch,
  AiOutlineLogout,
  AiFillSetting,
} from 'react-icons/ai';

const ResponsiveHeader = ({
  showSide,
  setShowSide,
}: stateRule): JSX.Element => {
  return (
    <div
      className="ResponsiveHeader-container"
      id={showSide === true ? 'active' : ''}
    >
      <div className="ResponsiveHeader-controlBar">
        <BsFillBellFill className="notice-Popup" />

        <div className="close-button" onClick={() => setShowSide(false)}>
          <IoClose />
        </div>
      </div>

      <div className="Profile-Box">
        <div className="User-Img">
          <img src={profileImg} alt="" />
        </div>

        <h1 className="User-name">Lim Min Hyeok</h1>

        <ul className="User-Info">
          <li>
            <span>100</span>
            <h1>follow</h1>
          </li>
          <li>
            <span>100</span>
            <h1>Like</h1>
          </li>
          <li>
            <span>100</span>
            <h1>Article</h1>
          </li>
        </ul>
      </div>

      <ul className="Responsive-NavMenu">
        <li>
          <AiFillNotification className="Menu-icon" />
          <a href="#">공지사항</a>
        </li>

        <li>
          <AiOutlineSearch className="Menu-icon" />
          <a href="#">키워드 검색</a>
        </li>

        <li>
          <AiOutlineLogout className="Menu-icon" />
          <a href="#">키워드 검색</a>
        </li>

        <li>
          <AiFillSetting className="Menu-icon" />
          <a href="#">내 프로필 관리</a>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveHeader;
