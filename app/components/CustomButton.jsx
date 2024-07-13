"use client";
import { Button } from "@mui/material";
import { SmoothCorners } from "react-smooth-corners";

export default function CustomButton(props) {
  return (
    <>
      <SmoothCorners style={{ display: "none" }} />
      <Button
        variant={props.variant || "contained"}
        color="primary"
        {...props}
        sx={{
          borderRadius: props.borderRadius || "10px",
          fontSize: "16px",
          border: props.border || "none",
          // borderColor: props.borderColor || "transparent",
          backgroundColor: props.backgroundColor,
          fontWeight: props.fontWeight ? props.fontWeight : "400",
          height: props.height,
          width: props.width,
          color: props.textColor || "none",
          margin: props.margin || "none",
          "--smooth-corners": props.smoothCorners,
          maskImage: "paint(smooth - corners)",
          "-webkit-mask-image": "paint(smooth-corners)",
          textTransform: "none",
          "&:hover": {
            backgroundColor: props.backgroundColor,
            border: props.border || "none",
          },
        }}
      >
        {props.children}
      </Button>
    </>
  );
}
