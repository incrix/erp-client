import { Stack, Typography } from "@mui/material";

export default function PriceAction({ id, row }) {
  return (
    <Stack direction={"row"}>
      ₹&nbsp;
      <Typography variant="body2" fontWeight={600} fontSize={16}>
        {row.amount}
      </Typography>
    </Stack>
  );
}
