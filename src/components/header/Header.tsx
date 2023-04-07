import React from 'react';
import { stateRule } from 'routes/Home';
import { FiMenu } from 'react-icons/fi';
// import Notify from './Notify';
// import MyInfo from './MyInfo';
import 'assets/styles/Header/Header.scss';
import { useNavigate } from 'react-router-dom';

function Header({ setShowSide }: stateRule): JSX.Element {
  const navigate = useNavigate();

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
        <div className="sign-wrapper">
          <span onClick={() => navigate('/register')}>Sign up</span>
          <span>/</span>
          <span>Sign in</span>
        </div>

        {/* 알림팝업 */}
        {/* <Notify /> */}

        {/* 프로필팝업 */}
        {/* <MyInfo /> */}
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
