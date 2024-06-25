"use client";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CustomeButton from "@/app/components/CustomeButton";
import { Stack, Typography } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CreateCustomerForm from "./components/CreateCustomerForm";
import { useState, useEffect } from "react";
import useWindowDimensions from "@/util/useWindowDimensions";

export default function Page() {
  const { height, width } = useWindowDimensions();
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create new customer"}>
          <CustomeButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"200px"}
            startIcon={<SaveRoundedIcon />}
            // onClick={onSave}
          >
            Save customer
          </CustomeButton>
        </DashPaperHead>
        <DashPaperBody
          sx={{
            height: `${height - 250}px`,
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#F8F8F8",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(151, 161, 177, 0.5)",
              borderRadius: "5px",
              "&:hover": {
                background: "rgb(151, 161, 177)",
              },
            },
          }}
        >
          <CreateCustomerForm />    
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
