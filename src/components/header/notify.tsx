import React, { useState, useEffect } from "react";
import Popup from "components/common/Popup";
import { usePopup } from "hooks";
import moment from 'moment';

interface NotifyHistoryData {
  message: String,
  datetime: moment.Moment,
  userImage: String
}

interface NotifyHistoryList {
  list: NotifyHistoryData[]
}

const Notify = () => {
  const notifyPopup = usePopup();
  const [notifyList, setNotifyList] = useState<NotifyHistoryData[]>([]);

  useEffect(() => {
    setNotifyList([{
      message: '[태연]회원님의 댓글에 답글이 달렸습니다.',
      datetime: moment('2023-03-15 21:40:00'),
      userImage: ''
    },
    {
      message: '[태연]회원님의 댓글에 답글이 달렸습니다.',
      datetime: moment('2023-03-15 20:40:00'),
      userImage: ''
    },
    {
      message: '[태연]회원님의 댓글에 답글이 달렸습니다.',
      datetime: moment('2023-03-14 20:40:00'),
      userImage: ''
    },
    {
      message: '[태연]회원님의 댓글에 답글이 달렸습니다.',
      datetime: moment('2023-03-14 20:40:00'),
      userImage: ''
    }]);
  }, []);

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
            <span>({notifyList.length})</span>
          </div>
          <div className="popup-content">
            <NotifyList list={notifyList} />
          </div>
        </div>
      </Popup>
    </>
  );
};

const NotifyList = ({ list }: NotifyHistoryList) => {
  const formatHistoryTime = (datetime: moment.Moment): String | undefined => {
    const timeDiff = moment.duration(moment().diff(datetime));
    const diffSec = timeDiff.asSeconds();

    if (diffSec < 59)
      return `${Math.floor(timeDiff.asSeconds())}초전`
    else if (diffSec < 3600)
      return `${Math.floor(timeDiff.asMinutes())}분 전`
    else if (diffSec < 86400)
      return `${Math.floor(timeDiff.asHours())}시간 전`
    else
      return `${datetime.format('YYYY-MM-DD')}`
  }

  return (
    list.length ? (
      <ul>
        {list.map((item: NotifyHistoryData, index: number): React.ReactNode =>
          (
            <li key={index} tabIndex={1}>
              <img
                src={require("assets/images/DummyProfile.png")}
                alt='알림 프로필 이미지'
              />
              <div>{item.message}</div>
              <span>{formatHistoryTime(item.datetime)}</span>
            </li>
          )
        )}
      </ul>
    ) : <div className="no-data"><span tabIndex={1}>알림이 없습니다.</span></div>
  );
}

export default Notify;
