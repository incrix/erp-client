"use client";
import CustomDuoButtonGroup from "@/app/components/CustomDuoButtonGroup";
import CustomTextField from "@/app/components/CustomTextField";
import Icons from "@/util/icons";
import { IconButton, Stack, Typography } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { useState } from "react";

export default function CreateCustomerForm({
  onChangeCustomerValue,
  newCustomer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack gap={2}>
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Basic Details
      </Typography>
      <CustomDuoButtonGroup
        options={["Business", "Individual"]}
        onClick={(value) => {
          onChangeCustomerValue("type", value);
        }}
        value={newCustomer.type}
      />
      <Stack direction={"row"} gap={2}>
        <CustomTextField
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
          onChange={(e) => {
            onChangeCustomerValue("name", e.target.value);
          }}
        />
        <CustomTextField
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
          onChange={(e) => {
            onChangeCustomerValue("phone", e.target.value);
          }}
        />
      </Stack>
      <CustomTextField
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
        onChange={(e) => {
          onChangeCustomerValue("email", e.target.value);
        }}
      />
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Company Details
      </Typography>
      <Stack direction={"row"} gap={2}>
        <CustomTextField
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
          onChange={(e) => {
            onChangeCustomerValue("companyDetails", {
              companyName: e.target.value,
              GSTIN: newCustomer.companyDetails.GSTIN,
            });
          }}
        />
        <CustomTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"GSTIN"}
          borderWidth="1px"
          // InputProps={{
          //   startAdornment: (
          //     <AlternateEmailRoundedIcon
          //       sx={{
          //         color: "#82878C",
          //         marginRight: "5px",
          //         fontSize: "18px",
          //       }}
          //     />
          //   ),
          // }}
          onChange={(e) => {
            onChangeCustomerValue("companyDetails", {
              companyName: newCustomer.companyDetails.companyName,
              GSTIN: e.target.value,
            });
          }}
        />
      </Stack>
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Billing Address
      </Typography>
      <AddressForm
        address={newCustomer.billingAddress}
        onChange={(address) => {
          onChangeCustomerValue("billingAddress", address);
        }}
      />
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Typography
          variant="h6"
          fontSize={14}
          color={"#222429"}
          fontWeight={600}
        >
          Shipping Address
        </Typography>
        <IconButton
          onClick={() => {
            setIsOpen(!isOpen);
            !isOpen
              ? onChangeCustomerValue("shippingAddress", [
                  {
                    address1: "",
                    address2: "",
                    zipCode: "",
                    city: "",
                    state: "",
                  },
                ])
              : onChangeCustomerValue("shippingAddress", []);
          }}
        >
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
      {isOpen && (
        <AddressForm
          address={newCustomer.shippingAddress[0]}
          onChange={(address) => {
            onChangeCustomerValue("shippingAddress", [
              address,
              ...newCustomer.shippingAddress.slice(1),
            ]);
          }}
        />
      )}
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Opening balance
      </Typography>
      <Stack direction={"row"} gap={2}>
        <CustomDuoButtonGroup
          options={["Credit", "Debit"]}
          onClick={(value) => {
            onChangeCustomerValue("balance", {
              type: value,
              value: newCustomer.balance.value,
            });
          }}
          value={newCustomer.balance.type}
        />
        <CustomTextField
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
          onChange={(e) => {
            onChangeCustomerValue("balance", {
              type: newCustomer.balance.type,
              value: eval(e.target.value),
            });
          }}
        />
      </Stack>
    </Stack>
  );
}

function AddressForm({ address, onChange }) {
  return (
    <Stack gap={2}>
      <Stack direction={"row"} gap={2}>
        <CustomTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Address Line 1"}
          borderWidth="1px"
          value={address.address1}
          onChange={(e) => onChange({ ...address, address1: e.target.value })}
        />
        <CustomTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Address Line 2"}
          borderWidth="1px"
          value={address.address2}
          onChange={(e) => onChange({ ...address, address2: e.target.value })}
        />
      </Stack>
      <Stack direction={"row"} gap={2}>
        <CustomTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Zip code"}
          borderWidth="1px"
          value={address.zipCode}
          onChange={(e) => onChange({ ...address, zipCode: e.target.value })}
        />
        <CustomTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"City"}
          borderWidth="1px"
          value={address.city}
          onChange={(e) => onChange({ ...address, city: e.target.value })}
        />
      </Stack>
      <CustomTextField
        width={"300px"}
        height={"40px"}
        smoothCorners={15}
        placeholder={"State"}
        borderWidth="1px"
        value={address.state}
        onChange={(e) => onChange({ ...address, state: e.target.value })}
      />
    </Stack>
  );
}
