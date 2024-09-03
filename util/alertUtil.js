import store from "@/redux/store";
import { setAlert } from "@/redux/features/alertSlice";

export default function initAlert({
  title,
  message,
  open = true,
  severity,
  autoHideDuration,
  action,
  actionText,
  actionOnClick,
  actionColor,
  disableAutoHide,
  disableClose,
  disableAction,
  disableBackdropClick,
}) {
  console.log("initAlert", title, message, open, severity, autoHideDuration);
  store.dispatch((dispatch, getState) => {
    dispatch(
      setAlert({
        title,
        message,
        open,
        severity,
        autoHideDuration,
        action,
        actionText,
        actionOnClick,
        actionColor,
        disableAutoHide,
        disableClose,
        disableAction,
        disableBackdropClick,
      })
    );
  });
}
