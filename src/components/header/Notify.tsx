import React from "react";
import { useQuery } from "react-query";
import Popup from "components/common/Popup";
import { usePopup } from "hooks";
import { commonService } from "service";
import moment from "moment";

interface NotifyHistoryData {
  message: String;
  datetime: moment.Moment;
  userImage: String;
}

const Notify = () => {
  const notifyPopup = usePopup();

  // select: data에 실질적으로 담기기 직전에 호출되는 함수, data에 들어갈 값을 리턴값으로 지정
  const serverNotifyList = useQuery("notifyList", commonService.getNotify, {
    suspense: true,
    select: (r) => {
      return r.map((item: any) => {
        return {
          ...item,
          message: "[태연]회원님의 댓글에 답글이 달렸습니다.",
          datetime: moment(),
          userImage: "",
        };
      });
    },
  });

  const onNotifyOpen = (): void => {
    notifyPopup.toggle();
  };

  const formatHistoryTime = (datetime: moment.Moment): String | undefined => {
    const timeDiff = moment.duration(moment().diff(datetime));
    const diffSec = timeDiff.asSeconds();

    if (diffSec < 59) return `${Math.floor(timeDiff.asSeconds())}초전`;
    else if (diffSec < 3600) return `${Math.floor(timeDiff.asMinutes())}분 전`;
    else if (diffSec < 86400) return `${Math.floor(timeDiff.asHours())}시간 전`;
    else return `${datetime.format("YYYY-MM-DD")}`;
  };

  const { data } = serverNotifyList;

  return (
    <>
      <button type="button" className="btn-notify" onClick={onNotifyOpen}>
        {data.length && <span className="new">{data.length}</span>}
      </button>
      <Popup popupHooks={notifyPopup} className="inHeader profile">
        <div className="notify">
          <div className="popup-header">
            <h1>알림</h1>
            <span>({data.length || 0})</span>
          </div>
          <div className="popup-content">
            {data.length !== 0 ? (
              <ul>
                {data.map(
                  (item: NotifyHistoryData, index: number): React.ReactNode => (
                    <li key={index} tabIndex={1}>
                      <img
                        src={require("assets/images/DummyProfile.png")}
                        alt="알림 프로필 이미지"
                      />
                      <div>{item.message}</div>
                      <span>{formatHistoryTime(item.datetime)}</span>
                    </li>
                  )
                )}
              </ul>
            ) : (
              <div className="no-data">
                <span tabIndex={1}>알림이 없습니다.</span>
              </div>
            )}
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Notify;
