import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Status = 'success' | 'error' | 'warn' | 'info';

interface Notify {
  message: string;
  status: Status;
}

export function notify({
  message = 'default Message',
  status = 'success',
}: Notify) {
  // toast('Default Notification !');

  switch (status) {
    case 'success':
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'error':
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'warn':
      toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'info':
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    // toast('Custom Style Notification with css class!', {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    //   className: 'foo-bar',
    // });
    default:
      break;
  }
}
