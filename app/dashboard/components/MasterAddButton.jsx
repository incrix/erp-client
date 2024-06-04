import { Stack, Popover, Grid, Paper } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import NavButton from "./NavButton";
import Icons from "@/util/icons";
import CustomeStack from "@/app/components/CustomeStack";

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
            elevation: "2",
            sx: {
              borderRadius: "30px",
              backgroundColor: "transparent",
              marginTop: "10px",
            },
          },
        }}
      >
          <CustomeStack smoothCorners="10" background="white" sx={{padding:"20px"}} >
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
          </CustomeStack>
      </Popover>
    </Stack>
  );
}
