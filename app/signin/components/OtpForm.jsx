"use client";
import OtpInput from "react-otp-input";
import { SmoothCorners } from "react-smooth-corners";
import React, { useState, } from "react";
import { useRouter } from 'next/navigation'
import { Stack, Button } from "@mui/material";
import CustomButton from "@/app/components/CustomButton";

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handlerVerify = () => {
    if (otp.length <= 0) return
    fetch("/api/user/otp-verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       if(data.status === "success" && data.fill_the_details == false )  return router.push('/setup')
       if(data.status ===  'success' && data.type == 'create') return router.push('/setup')
       if(data.status == "success" && !data.type ) return router.push('/dashboard')
        
      });
  };
  const resendOtp =() =>{
    fetch("/api/user/resend-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOtp('')
        console.log(data);
      });
  }
  return (
    <Stack gap={2}>
      <SmoothCorners style={{ display: "none" }} />
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderInput={(props) => <input class="otp" {...props} />}
        containerStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        inputStyle={{
          width: "70px",
          height: "70px",
          color: "#000E33",
          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "10px",
          border: "2px solid #82878C",
          textAlign: "center",
          "--smooth-corners": "8",
          maskImage: "paint(smooth - corners)",
          "-webkit-mask-image": "paint(smooth-corners)",
        }}
      />

      <CustomButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#0080FF"}
        height={"50px"}
        onClick={handlerVerify}
        // width={"300px"}
      >
        Continue to verify
      </CustomButton>

      <Stack justifyContent={"center"} alignItems={"center"}>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            textDecoration: "underline",
            color: "#000E33",
            fontSize: "12px",
            fontWeight: "600",
            "&:hover": {
              textDecoration: "underline",
              background: "none",
            },
          }}
          onClick={resendOtp}
        >
          Resend OTP in 60 sec
        </Button>
      </Stack>
    </Stack>
  );
}
