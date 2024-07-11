import { IconButton, Popover, Stack, Typography } from "@mui/material";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { useState } from "react";
import { SmoothCorners } from "react-smooth-corners";
import CustomStack from "@/app/components/CustomStack";

export default function NotificationButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack>
      <IconButton
        sx={{
          backgroundColor: "#0080FF",
          "&:hover": {
            backgroundColor: "#0080FF",
          },
        }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <NotificationsSharpIcon style={{ color: "white" }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            // elevation: "2",
            sx: {
              p: 2,
              width: "400px",
              height: "600px",
              marginTop: "10px",
              "--smooth-corners": 15,
              maskImage: "paint(smooth - corners)",
              borderRadius: "10px",
              //   "-webkit-mask-image": "paint(smooth-corners)",
            },
          },
        }}
      >
        <SmoothCorners style={{ display: "none" }} />
        <Stack direction={"row"} gap={1}>
          <NotificationsSharpIcon style={{ color: "#97A1B1" }} />
          <Typography color={"#97A1B1"} fontWeight={600}>
            Notifications
          </Typography>
        </Stack>
        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#F6F6F6",
            marginTop: "10px",
            marginBottom: "10px",
            border: "none",
          }}
        />
        <CustomStack
          smoothCorners="32"
          background="#F8F8F8"
          width="100%"
          height="523px"
        ></CustomStack>
      </Popover>
    </Stack>
  );
}
