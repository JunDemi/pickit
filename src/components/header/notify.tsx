import React, { useState } from "react";
import FocusTrap from "focus-trap-react";

const Notify = () => {
  const [showing, setShowing] = useState<boolean>(false);

  const onPopupClose = () => {
    console.log("POPUP CLOSE!!");
  };

  return (
    <div>
      <button onClick={() => setShowing(true)}>focusTrap Outer!</button>
      <FocusTrap
        active={showing}
        focusTrapOptions={{
          onDeactivate: onPopupClose,
          clickOutsideDeactivates: true,
        }}
      >
        <div
          style={{
            display: showing ? "block" : "none",
            width: "500px",
            height: "500px",
            background: "black",
          }}
        >
          <button type="button" onClick={() => setShowing(false)}>
            focusTrap Inner!
          </button>
        </div>
      </FocusTrap>
    </div>
  );
};

export default Notify;
