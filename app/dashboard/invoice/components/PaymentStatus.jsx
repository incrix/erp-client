import { Stack, Chip, Popper, Fade, Paper, Typography } from "@mui/material";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
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
            >
              <a>avinash</a>
              <Typography sx={{ p: 2 }}>₹{row.amount}</Typography>
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
      {row.status === "partiallypaid" && (
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
