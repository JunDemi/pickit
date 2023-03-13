import React from 'react';
import FocusTrap from 'focus-trap-react';

import 'assets/styles/Popup.scss';

interface popupTypes {
    popupHooks: {
        isShowing: boolean,
        toggle: (flag?: boolean) => void
    },
    children: React.ReactNode
}

const Popup = (props: popupTypes) => {
    const { popupHooks } = props;

    const onPopupDeactive = (): void => {
        setTimeout(() => {
            popupHooks.toggle(false);
        }, 150);
    }

    return (
        <FocusTrap
            active={popupHooks.isShowing}
            focusTrapOptions={{
                onDeactivate : onPopupDeactive,
                clickOutsideDeactivates: true
            }}
        >
            <div className={`popup-wrapper ${popupHooks.isShowing ? 'show' : ''}`}>
                {props.children}
            </div>
        </FocusTrap>
    );
};

export default Popup;