"use client"
import { Stack } from "@mui/material";
import { SmoothCorners } from "react-smooth-corners";

export default function CustomStack(props) {
  return (
    <>
      <SmoothCorners style={{ display: "none" }} />
      <Stack
        {...props}
        sx={{
          "--smooth-corners": props.smoothCorners,
          maskImage: "paint(smooth - corners)",
          "-webkit-mask-image": "paint(smooth-corners)",
          background: props.background,
          cursor: props.cursor,
          "&:hover": props.hover,
          transition: props.transition,
          ...props.sx
        }}
      >
        {props.children}
      </Stack>
    </>
  );
}
