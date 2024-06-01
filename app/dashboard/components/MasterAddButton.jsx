import { Stack, Popover, Grid } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { SmoothCorners } from "react-smooth-corners";
import NavButton from "./NavButton";
import Icons from "@/util/icons";

export default function MasterAddButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack>
      <CustomeButton
        startIcon={<AddSharpIcon />}
        smoothCorners={8}
        backgroundColor={"#0080FF"}
        aria-describedby={id}
        onClick={handleClick}
      >
        Add
      </CustomeButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.19)",
              "--smooth-corners": 12,
              // backgroundColor: "#F8F8F8",
              maskImage: "paint(smooth - corners)",
              "-webkit-mask-image": "paint(smooth-corners)",
              marginTop: "10px",
              p: 2,
            },
          },
        }}
      >
        <SmoothCorners style={{ display: "none" }} />

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <NavButton
              isLight={true}
              title={"Invoice"}
              icon={<Icons.InvoiceIcon color="#97A1B1" />}
            />
            <NavButton
              isLight={true}
              title={"Product"}
              icon={<Icons.ProductIcon color="#97A1B1" />}
            />
            <NavButton
              isLight={true}
              title={"Payment"}
              icon={<Icons.PaymentIcon color="#97A1B1" />}
            />
          </Grid>
          <Grid item xs={6}>
            <NavButton
              isLight={true}
              title={"Customer"}
              icon={<Icons.CustomerIcon color="#97A1B1" />}
            />
            <NavButton
              isLight={true}
              title={"Vendor"}
              icon={<Icons.VendorIcon color="#97A1B1" />}
            />
            <NavButton
              isLight={true}
              title={"Purchase"}
              icon={<Icons.PurchaseIcon color="#97A1B1" />}
            />
          </Grid>
        </Grid>
      </Popover>
    </Stack>
  );
}
