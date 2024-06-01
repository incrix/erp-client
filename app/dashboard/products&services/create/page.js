"use client";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomeSwitch from "@/app/components/CustomeSwitch";
import { Stack, Typography } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CreateProductForm from "./components/CreateProductForm";

export default function Page() {
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create new product"}>
          <Stack direction={"row"} gap={1}>
            <Typography>Not for sale</Typography>
            <CustomeSwitch />
          </Stack>
          <CustomeButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"180px"}
            startIcon={<SaveRoundedIcon />}
          >
            Save
          </CustomeButton>
        </DashPaperHead>
        <DashPaperBody>
            <CreateProductForm />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
