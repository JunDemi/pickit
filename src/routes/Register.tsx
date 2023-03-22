import React from 'react';
import { ReactComponent as Banner } from '../assets/images/banner.svg';
import '../assets/styles/Register.scss';

function Register() {
  return (
    <div className="register-container">
      <div className="register-banner-wrapper">
        <Banner width={'100%'} height={'100%'} />
      </div>
      <div className="register-form-wrapper">
        <p className="register-title">가입 정보</p>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span className="register-input-label">닉네임 :</span>
            <div className="register-input-autocomplete-wrapper">
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div className="register-sign-up-button-wrapper">
              <button className="register-sign-up-button">중복 확인</button>
            </div>
          </div>
          <div className="register-input-wrapper-right">
            <span className="register-description">
              * (영문소문자/숫자, 4~16자)
            </span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span className="register-input-label">이메일 : </span>
            <div className="register-input-autocomplete-wrapper">
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div className="register-sign-up-button-wrapper"></div>
          </div>
          <div className="register-input-wrapper-right">
            <span className="register-description"></span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span className="register-input-label">패스워드 :</span>
            <div className="register-input-autocomplete-wrapper">
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div className="register-sign-up-button-wrapper"></div>
          </div>
          <div className="register-input-wrapper-right">
            <span className="register-description"></span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-footer">
          <div className="register-footer-buttons-wrapper">
            <button className="register-sign-up-button">계정 생성</button>
            <span className="register-login-description">
              이미 가입 된 계정이 있으시다면?
            </span>
            <button className="register-sign-in-button">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
