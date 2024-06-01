import { Stack, Typography, Autocomplete } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CustomeTextField from "@/app/components/CustomeTextField";

export default function CreateProductForm() {
  return (
    <Stack>
      <CustomeAutoComplete
        onChange={() => {}}
        placeholder={"Unit"}
        options={[1, 2, 3, 4, 5]}
        width={"300px"}
      />
      <CustomeTextField
        //   fullWidth={true}
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"unit"}
        />
    </Stack>
  );
}

function CustomeAutoComplete(
  props = { onChange, width, value, options, placeholder }
) {
  return (
    <Autocomplete
      {...props}
      disablePortal
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      sx={{ width: props.width, zIndex: "1000", p: 0     }}
      popupIcon={<KeyboardArrowDownRoundedIcon />}
      renderInput={(params) => (
        <CustomeTextField
          {...params}
          fullWidth={true}
          smoothCorners={15}
          height={"40px"}
          borderRadius={"10px"}
          placeholder={props.placeholder}
        />
      )}
    />
  );
}
