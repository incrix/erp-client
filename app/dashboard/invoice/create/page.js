"use client";
import { Stack, Typography } from "@mui/material";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
  DashPaperFooter,
  DashPaperPagination,
} from "../../components/DashPaper";
import CreateInvoiceBody from "./components/CreateInvoiceBody";
import CustomButton from "@/app/components/CustomButton";
import { useState } from "react";

export default function Page() {
  const [invoiceData, setInvoiceData] = useState({
    cusId: ["6669fdfc798adf8928c48fa8"],
    items: [
      {
        name: "Rocket6",
        productId: "665b5c20ea8a0d7117d39943",
        price: 3000,
        quantity: 1,
        totalPrice: 3000,
        discount: {
          type: "%",
          value: "10",
          amount: 300,
        },
      },
    ],
    transationDetails: {
      type: "cash",
      totalPrice: 3000,
    },
    additionalCharges: {
      package: {
        type: "%",
        value: "10",
      },
      delivery: {
        type: "₹",
        value: "10",
      },
    },
    totalPrice: 3000,
    paidAmount: 1,
    discount: {
      type: "%",
      value: "10",
    },
    tax: "0",
  });
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create Invoice #INV-01"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography fontSize={18} fontWeight={600}>
              TOTAL
            </Typography>
            <Typography fontSize={18}>₹{1000}</Typography>
          </Stack>
          <CustomButton
            smoothCorners={20}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"160px"}
            // onClick={() => router.push("/dashboard/invoice/create")}
          >
            Complete
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody
          sx={{
            height: "100%",
          }}
        >
          <CreateInvoiceBody />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
