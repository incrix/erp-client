import { Stack, Typography, Popover, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState, useEffect } from "react";
import { SmoothCorners } from "react-smooth-corners";
import CustomeStack from "@/app/components/CustomeStack";
import CustomeButton from "@/app/components/CustomeButton";
import AddSharpIcon from "@mui/icons-material/AddSharp";

import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/features/alertSlice";

export default function ManageBusiness() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack
    //   sx={{
    //     width: "200px",
    //   }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        aria-describedby={id}
        onClick={handleClick}
      >
        <Typography fontSize={"16px"} fontWeight={"500"}>
          Incrix Techlutions LLP
        </Typography>
        <KeyboardArrowDownRoundedIcon
          sx={{
            // color: "white",
            transform: open ? "rotate(180deg)" : "rotate(00deg)",
            marginLeft: "auto",
            fontSize: "26px",
            transition: "all 0.25s ease-out",
          }}
        />
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "300px",
              borderRadius: "10px",
              "--smooth-corners": 15,
              // backgroundColor: "#F8F8F8",
              maskImage: "paint(smooth - corners)",
              "-webkit-mask-image": "paint(smooth-corners)",
              marginTop: "10px",
              p: 2,
            },
          },
        }}
      >
        <SmoothCorners style={{ display: "none" }} />
        <OrgButton
          isSelected={true}
          onClick={() => {
            dispatch(
              setAlert({
                title: "Opened Successfully",
                open: true,
                message:"lorem ipsum dolor sit amet, consectetur",
                severity: "error",
              })
            );
          }}
        />
        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(130,135,140,20%)",
            marginTop: "10px",
            marginBottom: "10px",
            border: "none",
          }}
        />
        <CustomeButton
          startIcon={<AddSharpIcon />}
          smoothCorners={15}
          backgroundColor={"#0080FF"}
          width="100%"
        >
          Add Business
        </CustomeButton>
      </Popover>
    </Stack>
  );
}

function OrgButton({ isSelected, onClick }) {
  return (
    <CustomeStack
      onClick={onClick}
      smoothCorners="18"
      width="100%"
      padding="10px 20px"
      backgroundColor={isSelected ? "rgba(130,135,140,10%)" : null}
      sx={{
        borderRadius: "10px",
      }}
    >
      <Stack>
        <Typography fontSize={"14px"} fontWeight={"600"} color={"#97A1B1"}>
          Incrix Techlutions LLP
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography fontSize={"12px"} fontWeight={"500"} color={"#97A1B1"}>
            Business ID: {"66846846464684"}
          </Typography>
          <IconButton onClick={()=>{}}>
            <ContentCopyIcon
              sx={{
                width: "16px",
                height: "16px",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </CustomeStack>
  );
}
