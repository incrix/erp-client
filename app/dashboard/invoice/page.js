"use client";
import {
  Stack,
  InputAdornment,
  Typography,
  Menu,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import TableComponent from "../components/TableComponent";
import { useState, useEffect, useRef, use } from "react";
import useWindowDimensions from "@/util/useWindowDimensions";
import ActionButton from "./components/ActionButton";
import PaymentStatus from "./components/PaymentStatus";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CustomButton from "@/app/components/CustomButton";
import CustomTextField from "@/app/components/CustomTextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../components/DashPaper";
import PriceAction from "./components/PriceAction";
import { useRouter } from "next/navigation";
import getInvoiceList from "@/util/invoiceListUtil";
import SegmentedControl from "../components/SegmentedControl";
// import PrintoutComp from "../components/PrintoutComp";

export default function Page() {
  const { height, width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceList, setInvoiceList] = useState([]);
  const [filteredInvoiceList, setFilteredInvoiceList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("all");
  const [tabState, setTabState] = useState("all");
  const open = Boolean(anchorEl);
  const router = useRouter();
  const rowPerPage = 10;

  const updateInvoiceList = async () => {
    setIsLoading(true);
    const list = await getInvoiceList(true);
    setInvoiceList([...list].reverse());
    setIsLoading(false);
  };

  const handleFilterMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    invoiceList.length === 0 && updateInvoiceList();
  }, []);

  const onFilterAll = () => {
    setFilter("all");
    const list = invoiceList.filter((invoice) => {
      return invoice.status !== "cancelled";
    });
    setFilteredInvoiceList(list);
  };

  const onFilterPending = () => {
    setFilter("pending");
    const list = invoiceList.filter((invoice) => {
      return invoice.status === "pending";
    });
    setFilteredInvoiceList(list);
  };

  const onFilterPaid = () => {
    setFilter("paid");
    const list = invoiceList.filter((invoice) => {
      return invoice.status === "paid";
    });
    setFilteredInvoiceList(list);
  };

  const onFilterPartiallyPaid = () => {
    setFilter("partially");
    const list = invoiceList.filter((invoice) => {
      return invoice.status === "partially";
    });
    setFilteredInvoiceList(list);
  };

  const onFilterCancelled = () => {
    const list = invoiceList.filter((invoice) => {
      return invoice.status === "cancelled";
    });
    setFilteredInvoiceList(list);
  };

  useEffect(() => {
    filter === "all" && onFilterAll();
    filter === "pending" && onFilterPending();
    filter === "paid" && onFilterPaid();
    filter === "partially" && onFilterPartiallyPaid();
  }, [invoiceList]);

  const CustomerComp = ({ id, row }) => {
    return (
      <Stack>
        <Typography variant="body1" fontSize={"16px"}>
          {row.customerDetails.customerName}
        </Typography>
        <Typography variant="body2" fontSize={"12px"}>
          {row.customerDetails.phone}
        </Typography>
      </Stack>
    );
  };

  const headList = [
    { title: "Invoice", key: "id", type: "string" },
    {
      title: "Customer",
      key: "customer",
      type: "action",
      actionComp: CustomerComp,
    },
    { title: "Date", key: "date", type: "string" },
    {
      title: "Amount",
      key: "totalPrice",
      type: "action",
      actionComp: PriceAction,
    },
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

  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Invoice"}>
          <CustomTextField
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
          <CustomButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"160px"}
            startIcon={<AddCircleIcon />}
            onClick={() => router.push("/dashboard/invoice/create")}
          >
            Add Invoice
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody
          sx={{
            gap: 1.5,
          }}
        >
          <Stack direction={"row"} gap={2}>
            <SegmentedControl
              name="invoice"
              controlRef={useRef()}
              segments={[
                { value: "all", label: "All Invoice", ref: useRef() },
                { value: "cancelled", label: "Cancelled", ref: useRef() },
              ]}
              callback={(value, index) => {
                setTabState(value);
                setFilter("all");
                value === "cancelled" ? onFilterCancelled() : onFilterAll();
              }}
            />
            {tabState === "all" && (
              <Stack>
                <CustomButton
                  onClick={handleFilterMenuClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  startIcon={<FilterAltIcon />}
                  backgroundColor={"#F8F8F8"}
                  textColor={"#97A1B1"}
                  fontSize={"12px"}
                  fontWeight={"600"}
                  smoothCorners={10}
                  height={"40px"}
                >
                  Filter
                </CustomButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                    sx: {
                      padding: "5px",
                      "& .MuiMenuItem-root": {
                        padding: "5px 10px",
                        fontSize: "14px",
                        borderRadius: "5px",
                        color: "#97A1B1",
                        "&:hover": {
                          backgroundColor: "#F8F8F8",
                        },
                      },
                      "& .Mui-selected": {
                        backgroundColor: "#F2F8FF",
                      },
                    },
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: "10px",
                      },
                      elevation: 1,
                    },
                  }}
                >
                  <MenuItem
                    selected={filter === "all"}
                    onClick={() => {
                      onFilterAll();
                      setAnchorEl(null);
                    }}
                  >
                    All
                  </MenuItem>
                  <MenuItem
                    selected={filter === "paid"}
                    onClick={() => {
                      onFilterPaid();
                      setAnchorEl(null);
                    }}
                  >
                    Paid
                  </MenuItem>
                  <MenuItem
                    selected={filter === "partiallypaid"}
                    onClick={() => {
                      onFilterPartiallyPaid();
                      setAnchorEl(null);
                    }}
                  >
                    Partially Paid
                  </MenuItem>
                  <MenuItem
                    selected={filter === "pending"}
                    onClick={() => {
                      onFilterPending();
                      setAnchorEl(null);
                    }}
                  >
                    Pending
                  </MenuItem>
                </Menu>
              </Stack>
            )}
          </Stack>
          {isLoading ? (
            <LinearProgress />
          ) : (
            <TableComponent
              headList={headList}
              rows={filteredInvoiceList}
              currentPage={currentPage}
              rowPerPage={rowPerPage}
              height={height > 800 ? `${height * 0.6}px` : `${height * 0.55}px`}
              // isRowClickable={true}
              // onRowClick={(row) => {
              //   router.push(`/dashboard/invoice?id=${row._id}`);
              // }}
            />
          )}
        </DashPaperBody>
        <DashPaperFooter>
          <DashPaperPagination
            currentPage={currentPage}
            rowPerPage={rowPerPage}
            setCurrentPage={setCurrentPage}
            rowLength={filteredInvoiceList.length}
          />
        </DashPaperFooter>
      </DashPaperLayout>
    </Stack>
  );
}
