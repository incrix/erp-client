import { TextField } from "@mui/material";
import { SmoothCorners } from "react-smooth-corners";

export default function CustomTextField(props) {
  return (
    <>
      <SmoothCorners style={{ display: "none" }} />
      <TextField
        variant="outlined"
        inputProps={{
          style: { color: "#82878C", fontSize: "16px", fontWeight: "400", resize:"vertical" },
        }}
        {...props}
        sx={{
          textAlign: props.textAlign,
          "& .MuiOutlinedInput-root": {
            p: props.p,
            height: props.height,
            width: props.width,
            "& fieldset": {
              borderColor: "#82878C",
              borderWidth: props.borderWidth ? props.borderWidth : 2,
              borderRadius: props.borderRadius ? props.borderRadius : "10px",
              "--smooth-corners": props.smoothCorners,
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
          ...props.sx,
        }}
      >
        {props.children}
      </TextField>
    </>
  );
}
