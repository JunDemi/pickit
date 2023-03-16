import { useState, useCallback } from 'react';

const usePopup = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggle = useCallback(
    (flag?: boolean): void => {
      setIsShowing(flag ?? !isShowing);
    },
    [isShowing],
  );

  return { isShowing, toggle };
};

export default usePopup;
