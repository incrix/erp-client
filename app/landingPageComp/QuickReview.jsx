import { Stack, Typography } from "@mui/material";
import posIcon from "@/public/landing/icons/pos-icon.svg";
import inventoryIcon from "@/public/landing/icons/inventory-icon.svg";
import reportIcon from "@/public/landing/icons/report-icon.svg";
import commIcon from "@/public/landing/icons/comm-icon.svg";
import purIcon from "@/public/landing/icons/pur-icon.svg";
import paymentIcon from "@/public/landing/icons/payment-icon.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function QuickReview() {
  const quickReviewList = [
    {
      title: "POS",
      description:
        "Process transactions, accept various payment methods and generate receipts.",
      icon: posIcon.src,
    },
    {
      title: "Inventory",
      description:
        "Keep track of your stock levels in real-time, manage multiple warehouses.",
      icon: inventoryIcon.src,
    },
    {
      title: "Reports",
      description:
        "Monitor financial, allowing users to analyze trends, identify patterns, and gain deeper insights.",
      icon: reportIcon.src,
    },
    {
      title: "E-commerce",
      description:
        "Synchronize product listings, inventory levels, and orders between your ERP & E-commerce.",
      icon: commIcon.src,
    },
    {
      title: "Purchase / Sales",
      description:
        "Create, track, and manage purchase & sales orders efficiently.",
      icon: purIcon.src,
    },
    {
      title: "Payments",
      description:
        "Offer flexible payment options to customers such as split payments, credit options etc.",
      icon: paymentIcon.src,
    },
  ];
  return (
    <Stack sx={{ backgroundColor: "#1D1D21" }} alignItems={"center"}>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "1400px",
          margin: "100px 0",
          textAlign: "center",
        }}
        padding={"60px 30px"}
        gap={10}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
          }}
          color={"white"}
        >
          Review quickly and
          <br /> confidently using{" "}
          <font style={{ color: "#0080FF" }}>Slipze.</font>
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={4}
        >
          {quickReviewList.map((review) => (
            <Stack
              width={"316px"}
              height={"320px"}
              border={"2px solid #37373A"}
              borderRadius={"16px"}
              p={2}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} justifyContent={"space-between"}>
                <img src={review.icon} alt="" />
                <ArrowOutwardIcon sx={{ fill: "white", fontSize: "32px" }} />
              </Stack>
              <Stack textAlign={"start"} gap={2}>
                <Typography variant="h5" fontWeight={800} color={"white"}>
                  {review.title}
                </Typography>
                <Typography variant="p" color={"#BBBBBC"}>
                  {review.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
