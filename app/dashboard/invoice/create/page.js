"use client"
import { Stack } from "@mui/material";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../../components/DashPaper";
import CreateInvoiceBody from "./components/CreateInvoiceBody";

export default function Page() {
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create Invoice #INV-01"}>
        </DashPaperHead>
        <DashPaperBody sx={{
          height: "100%",
        }}>
            <CreateInvoiceBody />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
