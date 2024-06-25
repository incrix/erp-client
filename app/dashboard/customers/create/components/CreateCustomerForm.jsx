import CustomDuoButtonGroup from "@/app/components/CustomDuoButtonGroup";
import CustomeTextField from "@/app/components/CustomeTextField";
import Icons from "@/util/icons";
import { IconButton, Stack, Typography } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { useState } from "react";

export default function CreateCustomerForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack gap={2}>
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Basic Details
      </Typography>
      <CustomDuoButtonGroup
        options={["Business", "Individual"]}
        // onClick={(value) => {
        //   onChangeProductValue("type", value);
        // }}
        value={"Business"}
      />
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Customer Name"}
          borderWidth="1px"
          InputProps={{
            startAdornment: (
              <Icons.CustomerIcon
                color="#82878C"
                width="18px"
                margin="0 5px 0 0"
              />
            ),
          }}
          // onChange={(e) => {
          //   onChangeProductValue("name", e.target.value);
          // }}
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Phone"}
          borderWidth="1px"
          InputProps={{
            startAdornment: (
              <LocalPhoneRoundedIcon
                sx={{
                  color: "#82878C",
                  marginRight: "5px",
                  fontSize: "18px",
                }}
              />
            ),
          }}
          // onChange={(e) => {
          //   onChangeProductValue("name", e.target.value);
          // }}
        />
      </Stack>
      <CustomeTextField
        width={"300px"}
        height={"40px"}
        smoothCorners={15}
        placeholder={"Email"}
        borderWidth="1px"
        InputProps={{
          startAdornment: (
            <AlternateEmailRoundedIcon
              sx={{
                color: "#82878C",
                marginRight: "5px",
                fontSize: "18px",
              }}
            />
          ),
        }}
        // onChange={(e) => {
        //   onChangeProductValue("name", e.target.value);
        // }}
      />
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Company Details
      </Typography>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Company Name"}
          borderWidth="1px"
          InputProps={{
            startAdornment: (
              <Icons.VendorIcon
                color="#82878C"
                width="18px"
                margin="0 5px 0 0"
              />
            ),
          }}
          // onChange={(e) => {
          //   onChangeProductValue("name", e.target.value);
          // }}
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"GSTIN"}
          borderWidth="1px"
          //   InputProps={{
          //     startAdornment: (
          //       <AlternateEmailRoundedIcon
          //         sx={{
          //           color: "#82878C",
          //           marginRight: "5px",
          //           fontSize: "18px",
          //         }}
          //       />
          //     ),
          //   }}
          // onChange={(e) => {
          //   onChangeProductValue("name", e.target.value);
          // }}
        />
      </Stack>
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Billing Address
      </Typography>
      <AddressForm />
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Typography
          variant="h6"
          fontSize={14}
          color={"#222429"}
          fontWeight={600}
        >
          Shipping Address
        </Typography>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <AddCircleRoundedIcon
              style={{
                color: "#0080FF",
              }}
            />
          ) : (
            <RemoveCircleRoundedIcon style={{ color: "#F46F6F" }} />
          )}
        </IconButton>
      </Stack>
      {isOpen && <AddressForm />}
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Opening balance
      </Typography>
      <Stack direction={"row"} gap={2}>
        <CustomDuoButtonGroup
          options={["Credit", "Debit"]}
          // onClick={(value) => {
          //   onChangeProductValue("type", value);
          // }}
          value={"Credit"}
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"To pay"}
          borderWidth="1px"
          InputProps={{
            startAdornment: (
              <CurrencyRupeeRoundedIcon
                sx={{
                  color: "#82878C",
                  marginRight: "5px",
                  fontSize: "18px",
                }}
              />
            ),
          }}
          // onChange={(e) => {
          //   onChangeProductValue("name", e.target.value);
          // }}
        />
      </Stack>
    </Stack>
  );
}

function AddressForm() {
  return (
    <Stack gap={2}>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Address Line 1"}
          borderWidth="1px"
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Address Line 2"}
          borderWidth="1px"
        />
      </Stack>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Zipcode"}
          borderWidth="1px"
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"City"}
          borderWidth="1px"
        />
      </Stack>
      <CustomeTextField
        width={"300px"}
        height={"40px"}
        smoothCorners={15}
        placeholder={"State"}
        borderWidth="1px"
      />
    </Stack>
  );
}
