"use client";
import {
  DashPaperLayout,
  DashPaperHead,
  DashPaperBody,
} from "../../components/DashPaper";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeSwitch from "@/app/components/CustomeSwitch";
import { Stack, Typography } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CreateProductForm from "./components/CreateProductForm";
import { useState, useEffect } from "react";

export default function Page() {
  const [newProduct, setNewProduct] = useState({
    type: "Product",
    name: "",
    barcode: "",
    categoryId: "",
    sellingPrice: 0,
    sellingPriceWithTax: false,
    taxRate: 0,
    isSales: true,
    buyingPrice: 0,
    description: "<p></p>",
    stock: 0,
    unit: "",
    discount: {
      type: "%",
      value: 0,
    },
  });
  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);

  const onChangeProductValue = (param, value) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [param]: value,
    }));
  };

  const onSave = ()=>{
    console.log(newProduct);
  }
  return (
    <Stack height={"100%"}>
      <DashPaperLayout>
        <DashPaperHead title={"Create new product"}>
          <Stack direction={"row"} gap={1}>
            <Typography>Not for sale</Typography>
            <CustomeSwitch
              checked={!newProduct.isSales}
              onChange={(e) => {
                console.log(e.target.checked);
                onChangeProductValue("isSales", !e.target.checked);
              }}
            />
          </Stack>
          <CustomeButton
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
          </CustomeButton>
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
