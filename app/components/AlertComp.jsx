import { Alert, AlertTitle, Stack, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SmoothCorners } from "react-smooth-corners";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setInitial } from "../../redux/features/alertSlice";

export default function AlertComp() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(setInitial());
  };

  useEffect(() => {
    if (alert.open && alert.autoHideDuration) {
      setTimeout(() => {
        resetState();
      }, alert.autoHideDuration);
    }
  });

  return (
    <Stack position={"absolute"} top={100} maxWidth={350} right={20} zIndex={10000}>
      <SmoothCorners style={{ display: "none" }} />
      <Collapse in={alert.open}>
        <Alert
          severity={alert.severity}
          action={
            <IconButton size="small" onClick={resetState}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            backgroundColor: "#F2F8FF",
            borderRadius: "10px",
            border: "2px solid #A8ABAF",
            "--smooth-corners": 20,
            maskImage: "paint(smooth - corners)",
            "-webkit-mask-image": "paint(smooth-corners)",
          }}
        >
          <AlertTitle>
            <strong>{alert.title}</strong>
          </AlertTitle>
          {alert.message}
        </Alert>
      </Collapse>
    </Stack>
  );
}
