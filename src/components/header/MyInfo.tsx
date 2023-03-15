import React from "react";
import Popup from "components/common/Popup";
import { usePopup } from "hooks";

const MyInfo = () => {
  const myInfoPopup = usePopup();

  const onMyInfoPopup = (): void => {
    myInfoPopup.toggle();
  };

  const getUserData = (): React.ReactNode => {
    const dummy = [
      { label: "Follow", value: 12 },
      { label: "Like", value: "1.1k" },
      { label: "Article", value: 8 },
    ];
    return dummy.map((item, index) => {
      return (
        <div className="info-item" key={index}>
          <span className="info-value">{item.value}</span>
          <span className="info-label">{item.label}</span>
        </div>
      );
    });
  };

  const onProfile = (): void => {
    console.log("PROFILE!!!");
    myInfoPopup.toggle();
  };

  const onLogout = (): void => {
    console.log("LOGOUT!!!");
    myInfoPopup.toggle();
  };

  return (
    <>
      <button type="button" className="btn-profile" onClick={onMyInfoPopup}>
        <img src={require("../../assets/images/DummyProfile.png")} alt="das" />
      </button>
      <Popup popupHooks={myInfoPopup} className="inHeader profile">
        <div className="myInfo">
          <div className="info-top">
            <img
              src={require("../../assets/images/DummyProfile.png")}
              alt="das"
            />
            <div className="info-content">
              <h1>LIM MIN HYEOK</h1>
              <div className="info-items">{getUserData()}</div>
            </div>
          </div>
          <div className="info-bottom">
            <div tabIndex={1} onClick={onProfile}>
              <span className="icon icon_setting" />
              <span>내 프로필 관리</span>
            </div>
            <div tabIndex={1} onClick={onLogout}>
              <span className="icon icon_logout" />
              <span>로그아웃</span>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default MyInfo;
