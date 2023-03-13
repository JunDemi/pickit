import React from "react";
import usePopup from "./usePopup";
import Popup from './Popup';

const Notify = () => {
  const notifyPopup = usePopup();

  const onNotifyOpen = (): void => {
    notifyPopup.toggle()
  };

  return (
    <>
      <button type='button' onClick={onNotifyOpen}>focusTrap Outer!</button>
      <Popup popupHooks={notifyPopup}>
        <button type="button" onClick={() => notifyPopup.toggle()}>
          focusTrap Inner!
        </button>
      </Popup>
    </>
  );
};

export default Notify;
