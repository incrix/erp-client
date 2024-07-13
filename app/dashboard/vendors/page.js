"use client";
import { Stack, InputAdornment, LinearProgress } from "@mui/material";
import TableComponent from "../components/TableComponent";
import { useState, useEffect } from "react";
import useWindowDimensions from "@/util/useWindowDimensions";
import ActionButton from "./components/ActionButton";
// import PaymentStatus from "./components/PaymentStatus";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CustomButton from "@/app/components/CustomButton";
import CustomTextField from "@/app/components/CustomTextField";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../components/DashPaper";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateVendorList } from "@/redux/features/vendorList";
// import PriceAction from "./components/PriceAction";

export default function Page() {
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 10;
  const vendorList = useSelector((state) => state.vendorList);
  const [isLoading, setIsLoading] = useState(true);

  //http://localhost:3333/api/vendor/get-all-vendor
  const updateList = async () => {
    await fetch("/api/vendor/get-all-vendor")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatch(
          updateVendorList({
            data: data.data,
          })
        );
      });
  };

  useEffect(() => {
    vendorList.length == 0 && isLoading && updateList();
    if (vendorList.length > 0) setIsLoading(false);
  });

  const headList = [
    { title: "Name", key: "name", type: "string" },
    { title: "Contact Info", key: "customer", type: "string" },
    // { title: "Type", key: "date", type: "string" },
    { title: "Closing balance", key: "amount", type: "string" },
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
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "02",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "03",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "04",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "partiallypaid",
    },
    {
      id: "05",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "06",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "partiallypaid",
    },
    {
      id: "07",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "08",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "09",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "10",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
    {
      id: "11",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "paid",
    },
    {
      id: "12",
      invoiceNo: "#INV0001",
      name: "Avinash",
      date: "02-02-2024",
      amount: 1020,
      status: "pending",
    },
  ];
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Vendors"}>
          <CustomTextField
            id="vendors"
            name="Vendors"
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
          <CustomButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"180px"}
            startIcon={<AddCircleIcon />}
            onClick={() => router.push("/dashboard/vendors/create")}
          >
            Add Vendors
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody>
          {isLoading ? (
            <LinearProgress />
          ) : (
            <TableComponent
              headList={headList}
              rows={vendorList}
              currentPage={currentPage}
              rowPerPage={rowPerPage}
              height={height > 800 ? `${height * 0.6}px` : `${height * 0.55}px`}
            />
          )}
        </DashPaperBody>
        <DashPaperFooter>
          <DashPaperPagination
            currentPage={currentPage}
            rowPerPage={rowPerPage}
            setCurrentPage={setCurrentPage}
            rowLength={vendorList.length}
          />
        </DashPaperFooter>
      </DashPaperLayout>
    </Stack>
  );
}
