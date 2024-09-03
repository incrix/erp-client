import { Stack, Chip, Popper, Fade, Paper, Typography } from "@mui/material";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";

export default function PaymentStatus({ id, row }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const onMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  const onMouseOver = () => {
    setOpen(true);
  };

  return (
    <Stack direction={"row"}>
      <Popper
        sx={{ zIndex: 1200, marginBottom: "20px" }}
        open={open}
        anchorEl={anchorEl}
        placement={"top-start"}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={500}>
            <Paper
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onMouseOut={onMouseLeave}
              elevation={2}
              sx={{
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography paddingBottom={"10px"} fontSize={14}>
                {row.status === "paid" ? "Paid Amount" : "Pending Amount"}
              </Typography>
              <Typography fontWeight={600} fontSize={18}>
                ₹
                {row.totalPrice - row.paidAmount === 0
                  ? row.paidAmount.toFixed(2)
                  : (row.totalPrice - row.paidAmount).toFixed(2)}
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      {row.status === "pending" && (
        <PaymentStatusChip
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id}
          label={"Pending"}
          icon={
            <AccessTimeFilledRoundedIcon color={"#F3801C"} fontSize="small" />
          }
          color={"#F3801C"}
          backgroundColor={"#FFF6E0"}
        />
      )}
      {row.status === "paid" && (
        <PaymentStatusChip
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id}
          label={"Paid"}
          icon={<VerifiedRoundedIcon color={"#31B132"} fontSize="small" />}
          color={"#31B132"}
          backgroundColor={"#ECFBEA"}
        />
      )}
      {row.status === "partially" && (
        <PaymentStatusChip
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id}
          label={"Partially Paid"}
          icon={<DonutLargeRoundedIcon color={"#F3801C"} fontSize="small" />}
          color={"#F3801C"}
          backgroundColor={"#FFF6E0"}
        />
      )}
      {row.status === "cancelled" && (
        <PaymentStatusChip
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id}
          label={"Cancelled"}
          icon={
            <CancelIcon color={"#F46F6F"} fontSize="small" />
          }
          color={"#F46F6F"}
          backgroundColor={"#FAF0F0"}
        />
      )}
    </Stack>
  );
}

function PaymentStatusChip({
  color,
  backgroundColor,
  icon,
  label,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <Chip
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        backgroundColor,
        color,
        fontSize: "12px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: backgroundColor,
          color: color,
        },
      }}
      icon={icon}
      label={label}
    />
  );
}
