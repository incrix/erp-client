import CustomStack from "@/app/components/CustomStack";
import { Stack, Typography } from "@mui/material";

export default function InvoiceSummary() {
    return (
      <CustomStack
        gap={1}
        justifyContent={"center"}
        width="100%"
        smoothCorners="25"
        background="#F2F8FF"
        padding={"20px"}
        borderRadius="20px"
        marginTop="20px"
        sx={{
          position: "relative",
          "&:after": {
            content: "''",
            position: "absolute",
            bottom: "60px",
            right: "-10px",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            background: "white",
          },
          "&:before": {
            content: "''",
            position: "absolute",
            bottom: "60px",
            left: "-10px",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            background: "white",
          },
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#82878C"}
        >
          <Typography>Subtotal</Typography>
          <Typography>₹{5110}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#82878C"}
        >
          <Typography>Total Discount</Typography>
          <Typography>₹{511}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#82878C"}
        >
          <Typography>Shipping Charges</Typography>
          <Typography>₹{100}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#82878C"}
        >
          <Typography>Packaging Charges</Typography>
          <Typography>₹{10}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#82878C"}
        >
          <Typography>Total Taxes</Typography>
          <Typography>₹{522}</Typography>
        </Stack>
        <hr
          style={{
            border: "none",
            height: "1px",
            background: "#82878C",
            background:
              "repeating-linear-gradient(90deg,#82878C,#82878C 6px,transparent 6px,transparent 12px)",
            margin: "10px 0",
          }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"black"}
        >
          <Typography fontSize={20} fontWeight={600}>
            Total
          </Typography>
          <Typography fontSize={20} fontWeight={600}>
            ₹{5110}
          </Typography>
        </Stack>
      </CustomStack>
    );
  }