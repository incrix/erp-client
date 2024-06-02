"use client";
import { Stack, InputAdornment } from "@mui/material";
import TableComponent from "../components/TableComponent";
import SalesButton from "./components/SalesButton";
import ActionButton from "./components/ActionButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../components/DashPaper";
import useWindowDimensions from "@/util/useWindowDimensions";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeTextField from "@/app/components/CustomeTextField";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { height, width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 10;
  const route = useRouter();
  const headList = [
    { title: "Name", key: "name", type: "string" },
    { title: "Price", key: "price", type: "string" },
    { title: "Category", key: "category", type: "string" },
    { title: "Stock", key: "stock", type: "string" },
    { title: "Sales", key: "isSales", type: "action", actionComp: SalesButton },
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
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "02",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: false,
    },
    {
      id: "03",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "04",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "05",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: false,
    },
    {
      id: "06",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "07",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "08",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: false,
    },
    {
      id: "09",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "10",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
    {
      id: "11",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: false,
    },
    {
      id: "12",
      name: "Arrival 15 shotsArrival 15 shots",
      price: 356,
      category: 16,
      stock: 49,
      isSales: true,
    },
  ];
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Product & Services"}>
          <CustomeTextField
            id="product"
            name="Product"
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
            onClick={() => {
              route.push("/dashboard/products&services/create");
            }}
            startIcon={<AddCircleIcon />}
          >
            Add Product
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
