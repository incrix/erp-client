"use client";
import { Stack, Drawer } from "@mui/material";
import { useState } from "react";

export default function CustomDrawerBox({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Drawer
      anchor={"top"}
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
        },
        elevation: 0,
      }}
    >
      <Stack alignItems={"center"} sx={{ width: "100%" }}>{children}</Stack>
    </Drawer>
  );
}
