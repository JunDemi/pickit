import { useState } from 'react';

const usePopup = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);
    
    const toggle = (flag?: boolean): void => {
        setIsShowing(flag ?? !isShowing);
    }

    return { isShowing, toggle }
}

export default usePopup;