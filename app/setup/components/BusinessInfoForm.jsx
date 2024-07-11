import CustomTextField from "@/app/components/CustomTextField";
import { Stack, Autocomplete, Checkbox, Popper } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function BusinessInfoForm({
  setUpBusinessDetails,
  businessDetails,
}) {
  const [checked, setChecked] = useState(
    businessDetails.orgGST == "" ? false : true
  );
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack gap={2}>
      <CustomTextField
        fullWidth={true}
        smoothCorners={18}
        value={businessDetails.orgName == "" ? "" : businessDetails.orgName}
        placeholder="Enter Organization name"
        onChange={(e) => {
          setUpBusinessDetails((prevState) => ({
            ...prevState, // copy the previous state
            orgName: e.target.value, // update the age field
          }));
        }}
      />
      <Autocomplete
        disablePortal
        options={industries}
        value={
          businessDetails.industryName == ""
            ? null
            : businessDetails.industryName
        }
        onChange={(event, value) =>
          setUpBusinessDetails((prevState) => ({
            ...prevState, // copy the previous state
            industryName: value == null ? "" : value.label, // update the age field
          }))
        }
        //  groupBy={(option) => option.category}
        sx={{ width: "100%" }}
        popupIcon={<KeyboardArrowDownRoundedIcon />}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            fullWidth={true}
            smoothCorners={18}
            placeholder="Which industry are you in?"
          />
        )}
      />
      <CustomTextField
        fullWidth={true}
        smoothCorners={18}
        placeholder="Organization phone number"
        value={businessDetails.orgPhone == "" ? "" : businessDetails.orgPhone}
        onChange={(e) => {
          setUpBusinessDetails((prevState) => ({
            ...prevState, // copy the previous state
            orgPhone: e.target.value, // update the age field
          }));
        }}
      />
      <CustomTextField
        fullWidth={true}
        smoothCorners={18}
        placeholder="Organization email address"
        value={businessDetails.orgEmail == "" ? "" : businessDetails.orgEmail}
        onChange={(e) => {
          setUpBusinessDetails((prevState) => ({
            ...prevState, // copy the previous state
            orgEmail: e.target.value, // update the age field
          }));
        }}
      />
      <Stack gap={1}>
        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleChange}
            sx={{
              color: "#82878C",
              "&.Mui-checked": {
                color: "#0080FF",
              },
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#82878C",
            }}
          >
            Is this business registered for GST?
          </p>
        </Stack>
        {checked && (
          <CustomTextField
            fullWidth={true}
            smoothCorners={18}
            placeholder="Organization GST"
            value={businessDetails.orgGST == "" ? "" : businessDetails.orgGST}
            onChange={(e) => {
              setUpBusinessDetails((prevState) => ({
                ...prevState, // copy the previous state
                orgGST: e.target.value, // update the age field
              }));
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

const industries = [
  {
    label: "Agency or Sales House",
  },
  {
    label: "Agriculture",
  },
  {
    label: "Art and Design",
  },
  {
    label: "Automotive",
  },
  {
    label: "Construction",
  },
  {
    label: "Consulting",
  },
  {
    label: "Consumer Packaged Goods",
  },
  {
    label: "Education",
  },
  {
    label: "Engineering",
  },
  {
    label: "Entertainment",
  },
  {
    label: "Financial Services",
  },
  {
    label: "Food Services (Restaurants/Fast Food)",
  },
  {
    label: "Gaming",
  },
  {
    label: "Government",
  },
  {
    label: "Health Care",
  },
  {
    label: "Interior Design",
  },
  {
    label: "Internal",
  },
  {
    label: "Legal",
  },
  {
    label: "Manufacturing",
  },
  {
    label: "Marketing",
  },
  {
    label: "Mining and Logistics",
  },
  {
    label: "Non-Profit",
  },
  {
    label: "Publishing and Web Media",
  },
  {
    label: "Real Estate",
  },
  {
    label: "Retail (E-Commerce and Offline)",
  },
  {
    label: "Services",
  },
  {
    label: "Technology",
  },
  {
    label: "Telecommunications",
  },
  {
    label: "Travel/Hospitality",
  },
  {
    label: "Web Designing",
  },
  {
    label: "Web Development",
  },
  {
    label: "Writers",
  },
];
