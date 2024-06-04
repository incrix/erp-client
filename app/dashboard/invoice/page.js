"use client";
import { Stack, InputAdornment } from "@mui/material";
import TableComponent from "../components/TableComponent";
import { useState } from "react";
import useWindowDimensions from "@/util/useWindowDimensions";
import ActionButton from "./components/ActionButton";
import PaymentStatus from "./components/PaymentStatus";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeTextField from "@/app/components/CustomeTextField";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../components/DashPaper";
import PriceAction from "./components/PriceAction";

export default function Page() {
  const { height, width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 10;
  const headList = [
    { title: "Invoice", key: "invoiceNo", type: "string" },
    { title: "Customer", key: "customer", type: "string" },
    { title: "Date", key: "date", type: "string" },
    { title: "Amount", key: "amount", type: "action", actionComp: PriceAction },
    {
      title: "Status",
      key: "status",
      type: "action",
      actionComp: PaymentStatus,
    },
    {
      title: "Actions",
      key: "actions",
      type: "action",
      actionComp: ActionButton,
    },
  ];
  const rows = [
    {
      id: "01",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "02",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "03",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "04",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "partiallypaid",
    },
    {
      id: "05",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "06",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "partiallypaid",
    },
    {
      id: "07",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "08",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "09",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "10",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "11",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "12",
      invoiceNo: "#INV0001",
      customer: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "partiallypaid",
    },
  ];
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Invoice"}>
          <CustomeTextField
            id="invoice"
            name="Invoice or Customer"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
            smoothCorners={18}
            width={"300px"}
            height={40}
            borderWidth={1}
            borderRadius="8px"
            placeholder={"Search"}
          />
          <CustomeButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"160px"}
            startIcon={<AddCircleIcon />}
          >
            Add Invoice
          </CustomeButton>
        </DashPaperHead>
        <DashPaperBody>
          <TableComponent
            headList={headList}
            rows={rows}
            currentPage={currentPage}
            rowPerPage={rowPerPage}
            height={height > 800 ? `${height * 0.6}px` : `${height * 0.55}px`}
          />
        </DashPaperBody>
        <DashPaperFooter>
          <DashPaperPagination
            currentPage={currentPage}
            rowPerPage={rowPerPage}
            setCurrentPage={setCurrentPage}
            rowLength={rows.length}
          />
        </DashPaperFooter>
      </DashPaperLayout>
    </Stack>
  );
}
