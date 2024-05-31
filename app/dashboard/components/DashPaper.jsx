"use client";
import { Stack, Typography, Divider, IconButton } from "@mui/material";
import { SmoothCorners } from "react-smooth-corners";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export function DashPaperLayout({ children }) {
  return (
    <Stack
      gap={1}
      sx={{
        margin: "30px 0 0 0",
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
      <Stack direction={"column"} marginTop={"auto"}>
        <Divider sx={{ margin: "0 20px", borderColor: "#F6F6F6" }} />
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

export function DashPaperFooter({ children, caption }) {
  return (
    <Stack
      height={"60px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      margin={"0 20px"}
    >
      <Stack>{caption ? { caption } : null}</Stack>
      {children}
    </Stack>
  );
}

export function DashPaperPagination({
  currentPage,
  rowPerPage,
  setCurrentPage,
  rowLength,
}) {
  const totalPage = Math.ceil(rowLength / rowPerPage);
  const onNextPage = () => {
    console.log(currentPage);
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };
  const onPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
    >
      <Typography variant="p" fontSize={12} fontWeight={600}>
        Page {currentPage} of {totalPage}
      </Typography>
      <IconButton
        size="small"
        sx={{
          borderRadius: "10px",
          color: "white",
          backgroundColor: "#000E33",
          "&:hover": {
            backgroundColor: "#000E33",
          },
        }}
        onClick={onPreviousPage}
      >
        <ArrowBackIosRoundedIcon fontSize="18px" />
      </IconButton>
      <Typography
        variant="p"
        fontSize={20}
        fontWeight={600}
        width={"45px"}
        textAlign={"center"}
      >
        {currentPage}
      </Typography>
      <IconButton
        size="small"
        sx={{
          borderRadius: "10px",
          color: "white",
          backgroundColor: "#000E33",
          "&:hover": {
            backgroundColor: "#000E33",
          },
        }}
        onClick={onNextPage}
      >
        <ArrowForwardIosRoundedIcon fontSize="18px" />
      </IconButton>
    </Stack>
  );
}
