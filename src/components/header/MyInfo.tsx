import React from "react";
import { useQuery } from 'react-query';
import Popup from "components/common/Popup";
import { usePopup } from "hooks";
import { commonService } from 'service';

interface MyInfoData {
  userName: String,
  follow: Number,
  like: Number,
  article: Number
}

const MyInfo = () => {
  const myInfoPopup = usePopup();
  // TODO: 데이터 수정필요
  const { data } = useQuery('myInfo', commonService.getMyInfo, {
    suspense: true,
    select: (r):MyInfoData => {
      return {
        userName: 'LIM MIN HYEOK',
        follow: 12,
        like: 1000,
        article: 100
      }
    }
  });

  const onMyInfoPopup = (): void => {
    myInfoPopup.toggle();
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
        {/* TODO: 이미지 src 수정필요 */}
        <img src={require("../../assets/images/DummyProfile.png")} alt="das" />
      </button>
      <Popup popupHooks={myInfoPopup} className="inHeader profile">
        <div className="myInfo">
          <div className="info-top">
            {/* TODO: 이미지 src 수정필요 */}
            <img
              src={require("../../assets/images/DummyProfile.png")}
              alt="das"
            />
            <div className="info-content">
              <h1>{data?.userName}</h1>
              <div className="info-items">
                <div className="info-item">
                  <span className="info-value">{data?.follow.toString()}</span>
                  <span className="info-label">Follow</span>
                </div>
                <div className="info-item">
                  <span className="info-value">{data?.like.toString()}</span>
                  <span className="info-label">Like</span>
                </div>
                <div className="info-item">
                  <span className="info-value">{data?.article.toString()}</span>
                  <span className="info-label">Article</span>
                </div>
              </div>
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
