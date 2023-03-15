import "../assets/styles/Register.scss";
import { ReactComponent as Banner } from "../assets/images/banner.svg";

function Register() {
  return (
    <div className="register-container">
      <div className="register-banner-wrapper">
        <Banner width={"100%"} height={"100%"} />
      </div>
      <div className="register-form-wrapper">
        <p className="register-title">가입 정보</p>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                width: "20%",
                flex: "1",
                textAlign: "end",
              }}
            >
              닉네임 :{" "}
            </span>
            <div
              style={{
                marginLeft: "30px",
                padding: "10px",
                border: "1px solid black",
                display: "flex",
                flex: "3",
              }}
            >
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div style={{ marginLeft: "40px", flex: "2" }}>
              <button className="register-sign-up-button">중복 확인</button>
            </div>
          </div>
          <div className="register-input-wrapper-right">
            <span
              style={{
                color: "#707070",
                fontSize: "0.8rem",
                marginRight: "10px",
              }}
            >
              * (영문소문자/숫자, 4~16자)
            </span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                width: "20%",
                flex: "1",
                textAlign: "end",
              }}
            >
              이메일 :{" "}
            </span>
            <div
              style={{
                marginLeft: "30px",
                padding: "10px",
                border: "1px solid black",
                display: "flex",
                flex: "3",
              }}
            >
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div style={{ marginLeft: "40px", flex: "2" }}></div>
          </div>
          <div className="register-input-wrapper-right">
            <span
              style={{
                color: "#707070",
                fontSize: "0.8rem",
                marginRight: "10px",
              }}
            ></span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-input-wrapper">
          <div className="register-input-wrapper-left">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                width: "20%",
                flex: "1",
                textAlign: "end",
              }}
            >
              패스워드 :
            </span>
            <div
              style={{
                marginLeft: "30px",
                padding: "10px",
                border: "1px solid black",
                display: "flex",
                flex: "3",
              }}
            >
              <input className="register-input-autocomplete" type="text" />
            </div>
            <div style={{ marginLeft: "40px", flex: "2" }}></div>
          </div>
          <div className="register-input-wrapper-right">
            <span
              style={{
                color: "#707070",
                fontSize: "0.8rem",
                marginRight: "10px",
              }}
            ></span>
          </div>
        </div>
        <hr className="register-hr" />
        <div className="register-footer">
          <div className="register-footer-buttons-wrapper">
            <button className="register-sign-up-button">계정 생성</button>
            {/* rgb(133 133 133); */}
            <span
              style={{
                fontSize: "0.8rem",
                color: "#707070",
                margin: "30px 0 10px 0",
                textAlign: "center",
              }}
            >
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
