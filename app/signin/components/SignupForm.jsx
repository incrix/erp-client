import { Stack, InputAdornment } from "@mui/material";
import CustomButton from "@/app/components/CustomButton";
import CustomTextField from "@/app/components/CustomTextField";
import atIcon from "../../../public/icons/at.png";
import userIcon from "../../../public/icons/user.png";
import { useState } from "react";

export default function SignUpForm({setVerify}) {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const handlerCreateAccount = () => {
    fetch('/api/user/create-user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,email
      })
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.status =='success') return setVerify(true)
      if(data.status == "info") return setVerify(false)
      if(data.status == "error") return setVerify(false)
    })
    
  }
  return (
    <Stack gap={2}>
      <CustomTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={userIcon.src} width={24} alt="" />
            </InputAdornment>
          ),
        }}
        fullWidth={true}
        smoothCorners={18}
        onChange={(e) => setName(e.target.value)}
        // width={"300px"}
        height={50}
        placeholder="Enter your name"
      />
      <CustomTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={atIcon.src} width={24} alt="" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth={true}
        smoothCorners={18}
        // width={"300px"}
        height={50}
        placeholder="Email address or mobile number"
      />
      <CustomButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#0080FF"}
        height={"50px"}
        // width={"300px"}
        onClick ={handlerCreateAccount}
      >
        Create an account
      </CustomButton>
    </Stack>
  );
}
