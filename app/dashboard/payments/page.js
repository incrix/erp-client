"use client";
import PrintoutComp from "../components/PrintoutComp";
import useWindowDimensions from "@/util/useWindowDimensions";
import { Typography } from "@mui/material";

export default function PaymentPage() {
  const { height, width } = useWindowDimensions();
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <h1>Payments</h1>
      <PrintoutComp />
    </div>
  );
}
