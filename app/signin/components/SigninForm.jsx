"use client";
import { Stack, InputAdornment } from "@mui/material";
import CustomButton from "@/app/components/CustomButton";
import CustomTextField from "@/app/components/CustomTextField";
import atIcon from "../../../public/icons/at.png";
import { useState } from "react";

export default function SignInForm({setVerify}) {
 
  const [email, setEmail] = useState("");
  const handlerVerify = () => {
    if (email.length > 0)
      fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.status === 'success') setVerify(true)
    
        });
  };
  return (
    <Stack gap={2}>
      <CustomTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={atIcon.src} width={24} alt="" />
            </InputAdornment>
          ),
        }}
        fullWidth={true}
        smoothCorners={18}
        // width={"300px"}
        onChange={(e) => setEmail(e.target.value)}
        height={50}
        placeholder="Email address or mobile number"
      />
      <CustomButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#000E33"}
        height={"50px"}
        onClick={handlerVerify}
        // width={"300px"}
      >
        Continue to verify
      </CustomButton>
    </Stack>
  );
}
