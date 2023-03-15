import React from "react";
import Popup from "components/common/Popup";
import { usePopup } from "hooks";

const Notify = () => {
  const notifyPopup = usePopup();

  const onNotifyOpen = (): void => {
    notifyPopup.toggle();
  };

  return (
    <>
      <button type="button" className="btn-notify" onClick={onNotifyOpen}>
        <span className="new">1</span>
      </button>
      <Popup popupHooks={notifyPopup} className="inHeader profile">
        <div className="notify">
          <div className="popup-header">
            <h1>알림</h1>
            <span>(22)</span>
          </div>
          <div className="popup-content">
            <ul>
              <li tabIndex={1}>
                <img
                  src={require("assets/images/DummyProfile.png")}
                  alt="das"
                />
                <div>[태연] 회원님의 댓글에 답글이 달렸습니다.</div>
                <span>45분전</span>
              </li>
            </ul>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Notify;
