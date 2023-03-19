import '../../assets/styles/Header/Header.scss';
import { BsFillBellFill } from 'react-icons/bs';
import Yuna from '../../assets/images/yuna.jpg';
import React from 'react';
import { stateRule } from '../../routes/Home';
import { FiMenu } from 'react-icons/fi';

function Header({ setShowSide }: stateRule): JSX.Element {
  return (
    <div className="Header-container">
      <div className="logo">
        <h1>PICKIT</h1>
      </div>

      <ul className="Header-Menu">
        <li>
          <span className="active">Home</span>
        </li>
        <li>
          <span>공지사항</span>
        </li>
        <li>
          <span>키워드 검색</span>
        </li>
      </ul>

      <div className="Popup-container">
        <BsFillBellFill className="notice-Popup" />

        <div className="UserProfile-Popup">
          <img src={Yuna} alt="" />
        </div>
      </div>

      <div
        className="Hamburger-button"
        onClick={() => {
          setShowSide(!false);
        }}
      >
        <FiMenu />
      </div>
    </div>
  );
}

export default Header;
