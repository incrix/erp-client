import {
  Stack,
  Typography,
  Select,
  ListSubheader,
  InputAdornment,
} from "@mui/material";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomeButton from "@/app/components/CustomeButton";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomSelect({
  onChange,
  width,
  height,
  value,
  options,
  placeholder,
  renderMenuItem,
  listSubheader
}) {
  const [searchText, setSearchText] = useState("");
  const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  //   const displayedOptions = useMemo(
  //     () => options.filter((option) => containsText(option, searchText)),
  //     [searchText]
  //   );

  return (
    <Select
      displayEmpty
      value={value}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <Typography variant="p" color={"#82878C"} fontSize={14}>
              {placeholder}
            </Typography>
          );
        }
        return (
          <Typography variant="p" color={"#82878C"} fontSize={14}>
            {selected}
          </Typography>
        );
      }}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 300,
            width: 300,
            borderRadius: "15px",
            backgroundColor: "white",
            // backgroundColor: "#F8F8F8",
          },
          sx: {
            "&::-webkit-scrollbar": {
              width: "10px",
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
          },
        },
      }}
      sx={{
        width,
        height,
        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#82878C",
            borderWidth: "1px",
            borderRadius: "10px",
            "--smooth-corners": "15",
            maskImage: "paint(smooth - corners)",
            "-webkit-mask-image": "paint(smooth-corners)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0080FF !important",
          },
          "&:hover fieldset": {
            borderColor: "#000E33",
          },
        },
      }}
      onChange={onChange}
    >
        {listSubheader}
        {/* <Stack gap={1}> */}
          {/* <CustomeTextField
            size="small"
            // Autofocus on textfield
            autoFocus
            placeholder="Type to search..."
            fullWidth
            smoothCorners={12}
            height="40px"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Escape") {
                // Prevents autoselecting item while typing (default Select behaviour)
                e.stopPropagation();
              }
            }}
          /> */}
          {/* <CustomeButton width="100%" smoothCorners="15">
            Add Catagory
          </CustomeButton>
        </Stack> */}
      {options.map((option) => renderMenuItem(option))}
    </Select>
  );

  // return (
  //   <Autocomplete
  //     {...props}
  //     disablePortal
  //     disableCloseOnSelect
  //     options={props.options}
  //     value={props.value}
  //     onChange={props.onChange}
  //     sx={{
  //       width: props.width,
  //       zIndex: "1000",
  //       p: 0,
  //       ".MuiOutlinedInput-root": {
  //         padding: "0 10px",
  //         height: props.height,
  //       },
  //     }}
  //     popupIcon={<ArrowDropDownRoundedIcon />}
  //     renderInput={(params) => (
  //       <CustomeTextField
  //         {...params}
  //         fullWidth={true}
  //         smoothCorners={15}
  //         borderWidth="1px"
  //         // height={"40px"}
  //         borderRadius={"10px"}
  //         placeholder={props.placeholder}
  //       />
  //     )}
  //   />
  // );
}
