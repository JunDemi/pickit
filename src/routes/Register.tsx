import '../assets/styles/Register.scss';
import { ReactComponent as Banner } from '../assets/images/banner.svg';

function Register() {


  return (
    <div className='register-container'>
      <div className='register-banner-wrapper'>
        <Banner width={'80%'} />
      </div>
      <div className='register-form-wrapper'>
        <p className='register-title'>가입 정보</p>
        <hr className='register-hr' />
        <div className='register-input-wrapper'>
          <div className='register-input-wrapper-left'>
            <span style={{ fontWeight: "bold", fontSize: '1.1rem' }}>닉네임 : </span>
            <div style={{ padding: "15px" }}>
              <input type="text" />
            </div>
            <div style={{ padding: "15px" }}>
              <button className='register-sign-up-button'>중복 확인</button>
            </div>
          </div>
          <div className='register-input-wrapper-right'>
            <span style={{ color: "#707070", fontSize: "0.8rem", marginRight: "10px" }}>* (영문소문자/숫자, 4~16자)</span>
          </div>
        </div>
        <hr className='register-hr' />
        <div className='register-input-wrapper'>
          <div className='register-input-wrapper-left'>
            <span style={{ fontWeight: "bold", fontSize: '1.1rem' }}>이메일 : </span>
            <div style={{ padding: "15px" }}>
              <input type="text" />
            </div>
          </div>
        </div>
        <hr className='register-hr' />
        <div className='register-input-wrapper'>
          <div className='register-input-wrapper-left'>
            <span style={{ fontWeight: "bold", fontSize: '1.1rem' }}>패스워드 : </span>
            <div style={{ padding: "15px" }}>
              <input type="text" />
            </div>
          </div>        </div>
        <hr className='register-hr' />
        <div className='register-footer'>
          <div className='register-footer-buttons-wrapper'>
            <button className='register-sign-up-button'>계정 생성</button>
            {/* rgb(133 133 133); */}
            <span style={{ fontSize: "0.8rem", color: "#707070", margin: "30px 0 10px 0", textAlign: "center" }}>이미 가입 된 계정이 있으시다면?</span>
            <button className='register-sign-in-button'>로그인</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;