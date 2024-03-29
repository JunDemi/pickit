import React from 'react';
import FocusTrap from 'focus-trap-react';

import 'assets/styles/Popup.scss';

interface popupTypes {
  popupHooks: {
    isShowing: boolean;
    // eslint-disable-next-line no-unused-vars
    toggle: (flag?: boolean) => void;
  };
  className?: string;
  children: React.ReactNode;
}

const Popup = (props: popupTypes) => {
  const { popupHooks, className } = props;

  const onPopupDeactive = (): void => {
    setTimeout(() => {
      popupHooks.toggle(false);
    }, 150);
  };

  return (
    <FocusTrap
      active={popupHooks.isShowing}
      focusTrapOptions={{
        onDeactivate: onPopupDeactive,
        clickOutsideDeactivates: true,
      }}
    >
      <div
        className={`popup-wrapper ${className} ${
          popupHooks.isShowing ? 'show' : ''
        }`}
      >
        {props.children}
      </div>
    </FocusTrap>
  );
};

export default Popup;
