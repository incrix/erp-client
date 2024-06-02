import {
  Stack,
  Typography,
  Autocomplete,
  ButtonGroup,
  Button,
} from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeStack from "@/app/components/CustomeStack";
import { useState } from "react";

export default function CreateProductForm() {
  return (
    <Stack direction={"row"}>
      <CustomAutoComplete
        onChange={() => {}}
        placeholder={"Unit"}
        options={[1, 2, 3, 4, 5]}
        width={"300px"}
        height={"40px"}
      />
      <CustomeTextField
        //   fullWidth={true}
        width={"300px"}
        height={"40px"}
        smoothCorners={15}
        placeholder={"unit"}
      />
      <CustomButtonDuoGroup />
    </Stack>
  );
}

function CustomAutoComplete(
  props = { onChange, width, height, value, options, placeholder }
) {
  return (
    <Autocomplete
      {...props}
      disablePortal
      disableCloseOnSelect
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      sx={{
        width: props.width,
        zIndex: "1000",
        p: 0,
        ".MuiOutlinedInput-root": {
          padding: "0 10px",
          height: props.height,
        },
      }}
      popupIcon={<ArrowDropDownRoundedIcon />}
      renderInput={(params) => (
        <CustomeTextField
          {...params}
          fullWidth={true}
          smoothCorners={15}
          // height={"40px"}
          borderRadius={"10px"}
          placeholder={props.placeholder}
        />
      )}
    />
  );
}

function CustomButtonDuoGroup() {
  const [value, setValue] = useState()
  return (
    <Stack direction={"row"}>
      <CustomeStack
        backgroundColor="#0080FF"
        justifyContent="center"
        borderRadius="10px 0 0 10px"
        padding="0 10px"
        border="2px solid #0080FF"
        smoothCorners="15"
        color="white"
        borderRight="0"
      >
        Business
      </CustomeStack>
      <CustomeStack
        justifyContent="center"
        borderRadius="0 10px 10px 0"
        padding="0 10px"
        border="2px solid #82878C"
        smoothCorners="15"
        color="#A8ABAF"
        borderLeft="0"
        hover={{
          border: "2px solid #0080FF",
          color: "#0080FF",
          borderLeft: "0",
        }}
      >
        Individual
      </CustomeStack>
    </Stack>
  );
}
