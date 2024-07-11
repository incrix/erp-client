"use client";
import { useState } from "react";
import CustomeSwitch from "@/app/components/CustomSwitch";

export default function SalesButton({ id, row }) {
  const [ischecked, setIsChecked] = useState(row.isSales);
  const handleClick = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <CustomeSwitch sx={{ m: 1 }} onChange={handleClick} checked={ischecked} />
  );
}
