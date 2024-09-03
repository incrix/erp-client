"use client";
import {
  Stack,
  Typography,
  FormControlLabel,
  Drawer,
  IconButton,
} from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import Template from "@/util/templates/invoice/Template1/Template";
import { useEffect, useState } from "react";
import CustomCheckbox from "@/app/components/CustomCheckbox";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { setInitialState, getPrintComp } from "@/util/printCompUtil";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setInitial } from "@/redux/features/printComp";

export default function PrintoutComp() {
  const printStale = useSelector((state) => state.printComp);
  const dispatch = useDispatch();
  const [invoiceType, setInvoiceType] = useState([]);

  useEffect(() => {
    if (printStale.isOpen && printStale.invoice) {
      setInvoiceType(["original"]);
    }
  }, [printStale.isOpen, printStale.invoice]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setInvoiceType((prev) => [...prev, name]);
    } else {
      setInvoiceType((prev) => prev.filter((item) => item !== name));
    }
  };

  return (
    <Drawer
      open={printStale.isOpen}
      anchor="right"
      sx={{
        ".MuiDrawer-paper": {
          width: {
            xs: "100%",
            sm: "80%",
            md: "80%",
            lg: "50%",
            xl: "50%",
          },
          maxWidth: "100%",
          padding: "20px",
          borderRadius: "20px 0 0 20px",
        },
      }}
    >
      <Stack width={"100%"} height={"100%"}>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <IconButton
            sx={{
              color: "#82878C",
              "&:hover": {
                color: "#F46F6F",
              },
            }}
            onClick={() => {
              dispatch(setInitial());
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Typography variant="h1" fontSize={18} fontWeight={"700"}>
            {printStale.title}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} margin={"10px 0"}>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={invoiceType.includes("original")}
                onChange={handleChange}
                name={"original"}
              />
            }
            label="Customer"
            slotProps={{
              typography: {
                fontSize: 16,
                color: "#82878C",
              },
            }}
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={invoiceType.includes("transport")}
                onChange={handleChange}
                name={"transport"}
              />
            }
            label="Transport"
            slotProps={{
              typography: {
                fontSize: 16,
                color: "#82878C",
              },
            }}
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={invoiceType.includes("supplier")}
                onChange={handleChange}
                name={"supplier"}
              />
            }
            label="Supplier"
            slotProps={{
              typography: {
                fontSize: 16,
                color: "#82878C",
              },
            }}
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={invoiceType.includes("delivery")}
                onChange={handleChange}
                name={"delivery"}
              />
            }
            label="Delivery Challan"
            slotProps={{
              typography: {
                fontSize: 16,
                color: "#82878C",
              },
            }}
          />
        </Stack>
        {printStale.isOpen && (
          <PDFViewer
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px",
              margin: "0",
              padding: "0",
            }}
          >
            <Template
              invoice={printStale.invoice}
              invoiceTypeList={invoiceType}
            />
          </PDFViewer>
        )}
      </Stack>
    </Drawer>
  );
}
