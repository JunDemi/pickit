import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from 'service';
import { ReactComponent as Banner } from '../assets/images/banner.svg';
import '../assets/styles/Register.scss';

interface RegisterInfo {
  nickname: string;
  username: string;
  password: string;
  name: string;
  email: string;
}

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<RegisterInfo>();

  const onSubmit: SubmitHandler<RegisterInfo> = async (data) => {
    try {
      await api.post('/user', data);
      location.href = '/login';
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const moveToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-container">
          <div className="register-banner-wrapper">
            <Banner width={'100%'} height={'100%'} />
          </div>
          <div className="register-form-wrapper">
            <p className="register-title">가입 정보</p>
            <hr className="register-hr" />
            {/* email */}
            <div className="register-input-wrapper">
              <div className="email-section-wrapper">
                <span className="email-input-label">이메일 : </span>
                <div className="email-input-wrapper">
                  <div className="email-input">
                    <input
                      {...register('email', { required: true })}
                      className="register-input"
                      type="text"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                  </div>
                  {errors.email?.type === 'required' && (
                    <p className="alert" role="alert">
                      이메일을 입력하세요.
                    </p>
                  )}
                </div>
                <div style={{ flex: 5 }}></div>
              </div>
            </div>
            <hr className="register-hr" />
            {/* 아이디 */}
            <div className="register-input-wrapper">
              <div className="username-section-wrapper">
                <span className="username-input-label">아이디 : </span>
                <div className="username-input-wrapper">
                  <div className="username-input">
                    <input
                      {...register('username', { required: true })}
                      className="register-input"
                      type="text"
                      aria-invalid={errors.username ? 'true' : 'false'}
                    />
                  </div>
                  {errors.username?.type === 'required' && (
                    <p className="alert" role="alert">
                      비밀번호를 입력하세요.
                    </p>
                  )}
                </div>
                <div style={{ flex: 5 }}></div>
              </div>
            </div>
            <hr className="register-hr" />
            {/* password */}
            <div className="register-input-wrapper">
              <div className="password-section-wrapper">
                <span className="password-input-label">비밀번호 : </span>
                <div className="password-input-wrapper">
                  <div className="password-input">
                    <input
                      {...register('password', { required: true })}
                      className="register-input"
                      type="password"
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                  </div>
                  {errors.password?.type === 'required' && (
                    <p className="alert" role="alert">
                      비밀번호를 입력하세요.
                    </p>
                  )}
                </div>
                <div style={{ flex: 5 }}></div>
              </div>
            </div>
            <hr className="register-hr" />
            {/* 닉네임 */}
            <div className="register-input-wrapper">
              <div className="nickname-section-wrapper">
                <span className="nickname-input-label">닉네임 :</span>
                <div className="nickname-left-section">
                  <div className="nickname-input-wrapper">
                    <div className="nickname-input">
                      <input
                        {...register('nickname', { required: true })}
                        className="register-input"
                        type="text"
                        aria-invalid={errors.nickname ? 'true' : 'false'}
                      />
                    </div>
                    {errors.nickname?.type === 'required' && (
                      <p className="alert" role="alert">
                        닉네임을 입력하세요.
                      </p>
                    )}
                  </div>
                </div>
                <div className="nickname-right-section">
                  <button className="register-validate-button">
                    중복 확인
                  </button>
                  <span className="register-description">
                    * (영문소문자/숫자, 4~16자)
                  </span>
                </div>
              </div>
            </div>
            <hr className="register-hr" />
            {/* 이름 */}
            <div className="register-input-wrapper">
              <div className="name-section-wrapper">
                <span className="name-input-label">이름 : </span>
                <div className="name-input-wrapper">
                  <div className="name-input">
                    <input
                      {...register('name', { required: true })}
                      className="register-input"
                      type="text"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                  </div>
                  {errors.name?.type === 'required' && (
                    <p className="alert" role="alert">
                      비밀번호를 입력하세요.
                    </p>
                  )}
                </div>
                <div style={{ flex: 5 }}></div>
              </div>
            </div>
            <hr className="register-hr" />
            <div className="register-footer">
              <div className="register-footer-buttons-wrapper">
                <input
                  className="register-sign-up-button"
                  type="submit"
                  value={'계정 생성'}
                />
                <span className="register-login-description">
                  이미 가입 된 계정이 있으시다면?
                </span>
                <button
                  className="register-sign-in-button"
                  onClick={moveToLogin}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
