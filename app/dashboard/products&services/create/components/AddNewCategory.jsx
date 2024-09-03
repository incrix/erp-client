"use client";
import { Stack, IconButton } from "@mui/material";
import CustomDialogBox from "@/app/components/CustomDialogBox";
import CustomButton from "@/app/components/CustomButton";
import CustomTextField from "@/app/components/CustomTextField";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import CustomStack from "@/app/components/CustomStack";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/features/alertSlice";

export default function AddNewCategory({ open, handleClose, updateCategory }) {
  const dispatch = useDispatch();

  const [categoryName, setCategoryName] = useState("");
  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };
  const handleSubmit = async () => {
    if (categoryName.trim() !== "") {
      await fetch("/api/product/create-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ catName: categoryName }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(
            setAlert({
              title: data.message,
              open: true,
              // message: data.message,
              severity: data.status,
              autoHideDuration: 5000,
            })
          );
          if (data.status == "success"){ 
            handleClose();
            updateCategory(true);
          };
        });
    } else {
      dispatch(
        setAlert({
          title: "Category name cannot be empty",
          open: true,
          // message: data.message,
          severity: "warning",
          autoHideDuration: 5000,
        })
      );
    }
  };
  return (
    <CustomDialogBox
      open={open}
      onClose={handleClose}
      title={
        <Stack direction={"row"} justifyContent={"space-between"}>
          <h3>Create new category</h3>
          <IconButton
            onClick={handleClose}
            sx={{ "&:hover": { color: "#FF2E2E" } }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      }
      actions={
        <CustomButton
          smoothCorners={15}
          backgroundColor={"#0080FF"}
          onClick={handleSubmit}
        >
          Create category
        </CustomButton>
      }
    >
      <Stack gap={2}>
        {/* <Stack>
            <label
              for="upload-photo"
              style={{
                cursor: "pointer",
              }}
            >
              <CustomStack
                alignItems={"center"}
                justifyContent={"center"}
                smoothCorners={"12"}
                borderRadius={"10px"}
                width="120px"
                height="100px"
                border={"2px solid #82878C"}
              >
                <AddPhotoAlternateRoundedIcon
                  sx={{
                    color: "#82878C",
                    fontSize: "40px",
                  }}
                />
              </CustomStack>
            </label>
            <input
              type="file"
              id="upload-photo"
              style={{
                display: "none",
              }}
            />
          </Stack> */}
        <CustomTextField
          fullWidth
          height={"40px"}
          smoothCorners={20}
          placeholder={"Eg: Dairy Products"}
          borderWidth="1px"
          value={categoryName}
          onChange={handleCategoryNameChange}
        />
        {/* <CustomTextField
            fullWidth
            multiline
            smoothCorners={25}
            // sx={{minHeight:"80px"}}
            placeholder={"Description"}
            borderWidth="1px"
            // onChange={(e) => {
            //   onChangeProductValue("sku", e.target.value);
            // }}
          /> */}
      </Stack>
    </CustomDialogBox>
  );
}
