import React from 'react';
import { stateRule } from 'routes/Home';
import { FiMenu } from 'react-icons/fi';
import Notify from './Notify';
import MyInfo from './MyInfo';
import 'assets/styles/Header/Header.scss';
import { useNavigate } from 'react-router-dom';
import { isLogin } from 'modules';

function Header({ setShowSide }: stateRule): JSX.Element {
  const navigate = useNavigate();
  const loginCheck = isLogin();

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
        <li>
          <span>문의하기</span>
        </li>
      </ul>

      {/* 알림팝업 */}
      {/* 프로필팝업 */}
      <div className="Popup-container">
        {loginCheck ? (
          <>
            <Notify />
            <MyInfo />
          </>
        ) : (
          <div className="sign-wrapper">
            <span onClick={() => navigate('/register')}>Sign up</span>
            <span>/</span>
            <span onClick={() => navigate('/login')}>Sign in</span>
          </div>
        )}
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
