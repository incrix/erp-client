"use client";
import { useState } from "react";
import CustomeSwitch from "@/app/components/CustomeSwitch";

export default function SalesButton({ id, value }) {
  const [ischecked, setIsChecked] = useState(value)
  const handleClick = (e) => {
    setIsChecked(e.target.checked)
    
  };
  return <CustomeSwitch sx={{ m: 1 }} onChange={handleClick} checked={ischecked} />;
}
