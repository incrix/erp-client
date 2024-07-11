"use client";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CustomButton from "@/app/components/CustomButton";
import CustomeSwitch from "@/app/components/CustomSwitch";
import { Stack, Typography } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CreateProductForm from "./components/CreateProductForm";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/features/alertSlice";
import { useRouter } from "next/navigation";
import { emptyProductList } from "@/redux/features/productList";

export default function Page() {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    type: "Product",
    name: "",
    barcode: "",
    categoryId: "",
    unitPrice: 0,
    withinTax: false,
    taxRate: 0,
    isSales: true,
    buyingPrice: 0,
    description: "<p></p>",
    stockQty: 0,
    unit: "",
    discount: {
      type: "%",
      value: 0,
    },
  });
  const router = useRouter();
  const onChangeProductValue = (param, value) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [param]: value,
    }));
  };

  const onSave = () => {
    console.log(newProduct);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    fetch(`/api/product/create-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
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
          dispatch(emptyProductList());
          router.push("/dashboard/products&services");
        }
      });
  };
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create new product"}>
          <Stack direction={"row"} gap={1}>
            <Typography>Not for sale</Typography>
            <CustomeSwitch
              checked={!newProduct.isSales}
              onChange={(e) => {
                onChangeProductValue("isSales", !e.target.checked);
              }}
            />
          </Stack>
          <CustomButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"180px"}
            startIcon={<SaveRoundedIcon />}
            onClick={onSave}
          >
            Save
          </CustomButton>
        </DashPaperHead>
        <DashPaperBody>
          <CreateProductForm
            onChangeProductValue={onChangeProductValue}
            newProduct={newProduct}
          />
        </DashPaperBody>
      </DashPaperLayout>
    </Stack>
  );
}
