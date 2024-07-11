"use client";
import { Stack, Typography, Popover } from "@mui/material";
import { useState } from "react";
import CustomStack from "@/app/components/CustomStack";
import Avatar from "@/util/avatar";
import NavButton from "./NavButton";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { SmoothCorners } from "react-smooth-corners";

export default function UserInfoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack position="relative">
      <CustomStack
        aria-describedby={id}
        background={"rgba(130,135,140,30%)"}
        smoothCorners={"12"}
        direction="row"
        width="100%"
        height={"60px"}
        borderRadius={"10px"}
        alignItems={"center"}
        padding={"0 15px"}
        gap={1}
        onClick={handleClick}
        hover={{
          background: "rgba(130,135,140,50%)",
          transition: "all 0.25s ease-out",
        }}
        sx={{
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        }}
        cursor="pointer"
      >
        <Avatar
          character="m1"
          sx={{
            width: "44px",
            borderRadius: "50%",
            border: "1px solid #0080FF",
          }}
        ></Avatar>
        <Typography variant="h6" fontSize={"16px"} color={"white"}>
          Avinash Sethu
        </Typography>
      </CustomStack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              "--smooth-corners": 12,
              maskImage: "paint(smooth - corners)",
              "-webkit-mask-image": "paint(smooth-corners)",
            },
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <CustomStack
          smoothCorners={"12"}
          gap={0.5}
          alignItems={"center"}
          sx={{
            // background: "black",
            padding: "10px",
            borderRadius: "10px",
            transition: "all 0.25s ease-out",
            width: "225px",
            height: "auto",
          }}
        >
          <SmoothCorners style={{ display: "none" }} />
          <NavButton
            isLight={true}
            icon={
              <SettingsRoundedIcon
                sx={{
                  color: "#97A1B1",
                }}
              />
            }
            title={"Settings"}
          />
          <hr
            style={{
              width: "90%",
              height: "1px",
              backgroundColor: "#A8ABAF",
              border: "none",
            }}
          />
          <NavButton
            isLight={true}
            icon={
              <LogoutRoundedIcon
                sx={{
                  color: "#97A1B1",
                }}
              />
            }
            title={"Logout"}
          />
        </CustomStack>
      </Popover>
    </Stack>
  );
}
