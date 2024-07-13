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
import { updateCustomerList } from "@/redux/features/customerList";
// import PriceAction from "./components/PriceAction";

export default function Page() {
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 10;
  const customerList = useSelector((state) => state.customerList);
  const [isLoading, setIsLoading] = useState(true);

  //http://localhost:3333/api/customer/get-all-cus
  const updateList = async () => {
    await fetch("/api/customer/get-all-cus")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatch(
          updateCustomerList({
            data: data,
          })
        );
      });
  };

  useEffect(() => {
    console.log(customerList);
    customerList.length == 0 && isLoading && updateList();
    if (customerList.length > 0) setIsLoading(false);
  });

  const headList = [
    { title: "Name", key: "name", type: "string" },
    { title: "Contact Info", key: "email", type: "string" },
    { title: "Type", key: "type", type: "string" },
    { title: "Closing balance", key: "amount", type: "string" },
    {
      title: "Actions",
      key: "actions",
      type: "action",
      actionComp: ActionButton,
    },
  ];

  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Customers"}>
          <CustomTextField
            id="customers"
            name="Customers"
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
            onClick={() => router.push("/dashboard/customers/create")}
          >
            Add Customer
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody>
          {isLoading ? (
            <LinearProgress />
          ) : (
            <TableComponent
              title={"Customer"}
              headList={headList}
              rows={customerList}
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
            rowLength={customerList.length}
          />
        </DashPaperFooter>
      </DashPaperLayout>
    </Stack>
  );
}
