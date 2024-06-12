import { Typography, Select } from "@mui/material";

export default function CustomSelect({
  onChange,
  width,
  height,
  value,
  options,
  placeholder,
  renderMenuItem,
  listSubheader,
  border,
  startAdornment,
  color,
  fill,
  borderRadius
}) {
  return (
    <Select
      displayEmpty
      value={value}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <Typography
              variant="p"
              color={color ? color : "#82878C"}
              fontSize={14}
            >
              {placeholder}
            </Typography>
          );
        }
        return (
          <Typography
            variant="p"
            color={color ? color : "#82878C"}
            fontSize={14}
          >
            {selected}
          </Typography>
        );
      }}
      MenuProps={{
        autoFocus: false,
        PaperProps: {
          style: {
            maxHeight: 300,
            width: width,
            borderRadius: borderRadius ? borderRadius : "15px",
            backgroundColor: "white",
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
      startAdornment={startAdornment}
      sx={{
        width,
        height,
        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            border,
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
        ".MuiSvgIcon-root ": {
          fill: fill,
        },
      }}
      onChange={onChange}
    >
      {listSubheader}
      {options.length != 0 ? null : (
        <Typography width={"100%"} textAlign={"center"} padding={"10px 0 "}>
          No {placeholder}
        </Typography>
      )}
      {options.map((option) => renderMenuItem(option))}
    </Select>
  );
}

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
