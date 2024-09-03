import Icons from "@/util/icons";
import { useState } from "react";
import { IconButton, Stack, Menu, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import CustomButton from "@/app/components/CustomButton";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import { setPrintCompState } from "@/util/printCompUtil";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: "#F8F8F8",
    color: "#97A1B1",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#97A1B1",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function ActionButton({ id, row }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log(id);
    setAnchorEl(null);
  };
  return (
    <Stack width={"100%"} direction={"row"} alignItems={"center"}>
      <CustomButton
        textColor="#0080FF"
        borderRadius="5px"
        backgroundColor="#F2F8FF"
        border="1px solid #F2F8FF"
        fontSize="12px"
        startIcon={<LocalPrintshopRoundedIcon />}
        height="24px"
        smoothCorners="12"
        hover={{
          backgroundColor: "#F2F8FF",
          border: "1px solid #0080FF",
        }}
        onClick={() => {
          setPrintCompState({
            isOpen: true,
            title: "Preview Invoice",
            invoice: row,
          });
        }}
      >
        Print
      </CustomButton>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icons.MenuIcon width="22px" height="22px" color={"#0080FF"} />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Delete />
          Delete
        </MenuItem>
      </StyledMenu>
    </Stack>
  );
}
