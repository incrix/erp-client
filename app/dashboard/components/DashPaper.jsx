"use client";
import { Stack, Typography, TablePagination } from "@mui/material";
import { useState } from "react";
import { SmoothCorners } from "react-smooth-corners";

export function DashPaperLayout({ children }) {
  return (
    <Stack
      gap={1}
      sx={{
        margin: "30px 0 0 0",
        // padding: "20px",
        borderRadius: "20px",
        background: "#fff",
        height: "100%",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
        "--smooth-corners": 65,
        maskImage: "paint(smooth - corners)",
        "-webkit-mask-image": "paint(smooth-corners)",
      }}
    >
      <SmoothCorners style={{ display: "none" }} />
      <Stack direction={"column"} marginTop={2}>
        {children.find((child) => child.type === DashPaperHead)}
      </Stack>
      <Stack direction={"column"}>
        {children.find((child) => child.type === DashPaperAction)}
      </Stack>
      <Stack direction={"column"} margin={"0 20px"}>
        {children.find((child) => child.type === DashPaperBody)}
      </Stack>
      <Stack
        direction={"column"}
        sx={{
          marginTop: "auto",
        }}
      >
        {children.find((child) => child.type === DashPaperFooter)}
      </Stack>
    </Stack>
  );
}

export function DashPaperHead({ children, title }) {
  return (
    <Stack direction={"row"} height={"60px"} alignItems={"center"}>
      <span
        style={{ width: "3px", height: "20px", backgroundColor: "#0080FF" }}
      />
      <Stack
        direction={"row"}
        margin={"0 20px 0 17px"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h3" fontSize={"20px"} fontWeight={600}>
          {title}
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}

export function DashPaperAction({ children }) {
  return <Stack>{children}</Stack>;
}

export function DashPaperBody({ children }) {
  return <Stack>{children}</Stack>;
}

export function DashPaperFooter({ children }) {
  return <Stack>{children}</Stack>;
}

export function DashPaperPagination({ children }) {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
