"use client";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CustomButton from "@/app/components/CustomButton";
import { Stack, Typography } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CreateVendorForm from "./components/CreateVendorForm";
import { useState, useEffect } from "react";
import useWindowDimensions from "@/util/useWindowDimensions";
import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/features/alertSlice";
import { useRouter } from "next/navigation";
import { emptyVendorList } from "@/redux/features/vendorList";

export default function Page() {
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const dispatch = useDispatch();
  const [newVendor, setNewVendor] = useState({
    name: "",
    email: "",
    phone: "",
    companyDetails: {
      companyName: "",
      GSTIN: "",
    },
    billingAddress: {
      address1: "",
      address2: "",
      zipCode: "",
      city: "",
      state: "",
    },
    balance: {
      type: "Credit",
      value: 0,
    },
  });

  const onChangeVendorValue = (param, value) => {
    setNewVendor((prevState) => ({
      ...prevState,
      [param]: value,
    }));
  };

  useEffect(() => {
    console.log(newVendor);
  }, [newVendor]);

  const onSave = () => {
    fetch(`/api/vendor/create-vendor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVendor),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setAlert({
            title: data.message,
            open: true,
            // message: data.message,
            severity: data.status,
            autoHideDuration: 5000,
          })
        );
        if (data.status == "success") {
          dispatch(emptyVendorList());
          router.push("/dashboard/vendors");
        }
      });
  };

  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create new vendor"}>
          <CustomButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"200px"}
            startIcon={<SaveRoundedIcon />}
            onClick={onSave}
          >
            Save vendor
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody
          sx={{
            height: `${height - 250}px`,
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#F8F8F8",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(151, 161, 177, 0.5)",
              borderRadius: "5px",
              "&:hover": {
                background: "rgb(151, 161, 177)",
              },
            },
          }}
        >
          <CreateVendorForm
            onChangeVendorValue={onChangeVendorValue}
            newVendor={newVendor}
          />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
