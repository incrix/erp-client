"use client";
import { Stack, Typography } from "@mui/material";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CreateInvoiceBody from "./components/CreateInvoiceBody";
import CustomButton from "@/app/components/CustomButton";
import { useState, useEffect } from "react";
import initAlert from "@/util/alertUtil";

export default function Page() {
  const [invoiceData, setInvoiceData] = useState({
    cusId: [],
    items: [
      // {
      //   name: value.name,
      //   productId: value.productId,
      //   price: value.priceWithTax,
      //   quantity: 1,
      //   productIndex: productList.indexOf(value),
      //   unitPrice: value.unitPrice,
      //   totalPrice: value.priceWithTax,
      //   discount: {
      //     type: value.discount.type,
      //     value: value.discount.value,
      //     amount:
      //       value.discount.type === "₹"
      //         ? value.discount.value
      //         : (value.discount.value * value.priceWithTax) / 100,
      //   },
      //   tax: {
      //     cgst: {
      //       percentage: value.tax.rate / 2,
      //       value: value.tax.value / 2,
      //     },
      //     sgst: {
      //       percentage: value.tax.rate / 2,
      //       value: value.tax.value / 2,
      //     },
      //     igst: {
      //       percentage: value.tax.rate,
      //       value: value.tax.value,
      //     },
      //     cessPercentage: "0",
      //     cessValue: 0,
      //   },
      // }
    ],
    transactionDetails: {
      type: "UPI",
      notes: "",
    },
    additionalCharges: {
      package: {
        type: "₹",
        value: 0,
      },
      delivery: {
        type: "₹",
        value: 0,
      },
    },
    date: new Date().toLocaleDateString("es-CL"),
    totalPrice: 0,
    paidAmount: 0,
    discount: {
      type: "%",
      value: 0,
    },
    tax: {
      igst: 0,
      cgst: 0,
      sgst: 0,
    },
  });

  const onChangeInvoiceValue = (key, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const calculateTotal = () => {
    try {
      let total = 0;
      invoiceData.items.length !== 0 &&
        invoiceData.items.forEach((item) => {
          total += item.totalPrice;
        });
      total -=
        invoiceData.discount.type === "₹"
          ? invoiceData.discount.value
          : (invoiceData.discount.value * total) / 100;
      total += invoiceData.additionalCharges.package.value;
      total += invoiceData.additionalCharges.delivery.value;
      invoiceData.totalPrice !== total &&
        setInvoiceData((prev) => ({
          ...prev,
          totalPrice: total,
        }));
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTax = () => {
    try {
      let total = 0;
      invoiceData.items.length !== 0 &&
        invoiceData.items.forEach((item) => {
          total += parseFloat(item.tax.igst.amount) * item.quantity;
          total -= (item.discount.amount * item.tax.igst.percentage) / 100;
        });
      total -= (invoiceData.discount.value * total) / 100;
      invoiceData.tax.igst !== total &&
        setInvoiceData((prev) => ({
          ...prev,
          tax: {
            igst: total,
            cgst: total / 2,
            sgst: total / 2,
          },
        }));
    } catch (error) {
      console.log(error);
    }
  };

  const onInvoiceComplete = async () => {
    console.log(invoiceData);
    try {
      await fetch("/api/invoice/create-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      })
        .then((res) => res.json())
        .then((data) => {
          initAlert({
            title: data.message,
            severity: data.status,
            autoHideDuration: 5000,
          });
          console.log(data)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateTax();
    calculateTotal();
  }, [invoiceData]);

  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create Invoice #INV-01"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography fontSize={18} fontWeight={600}>
              TOTAL
            </Typography>
            <Typography fontSize={18}>₹{invoiceData.totalPrice}</Typography>
          </Stack>
          <CustomButton
            smoothCorners={20}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"160px"}
            onClick={onInvoiceComplete}
          >
            Complete
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody
          sx={{
            height: "100%",
          }}
        >
          {/* <BarcodeScanner /> */}
          <CreateInvoiceBody
            invoiceData={invoiceData}
            onChangeInvoiceValue={onChangeInvoiceValue}
            calculateTotal={calculateTotal}
          />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}

// let tax = {
//   cusId: [],
//   items: [
//     {
//       name: "",
//       productId: "",
//       price: "",
//       quantity: 0,
//       productIndex: 0,
//       unitPrice: 0,
//       totalPrice: 0,
//       discount: {
//         type: "",
//         percentage: 0,
//         amount: 0,
//       },
//       tax: {
//         cgst: {
//           percentage: value.tax.rate / 2,
//           value: value.tax.value / 2,
//         },
//         sgst: {
//           percentage: value.tax.rate / 2,
//           value: value.tax.value / 2,
//         },
//         igst: {
//           percentage: value.tax.rate,
//           value: value.tax.value,
//         },
//         cess: {
//           percentage: "0",
//           value: 0,
//         },
//       },
//     },
//   ],
//   transactionDetails: {
//     type: "",
//     description: "",
//   },
//   additionalCharges: {
//     package: {
//       type: "₹",
//       value: 0,
//     },
//     delivery: {
//       type: "₹",
//       value: 0,
//     },
//   },
//   date: new Date().toLocaleDateString("es-CL"),
//   totalPrice: 0,
//   paidAmount: 0,
//   discount: {
//     type: "%",
//     value: 0,
//     amount: 0,
//   },
//   tax: {
//     igst: 0,
//     cgst: 0,
//     sgst: 0,
//   },
// };
