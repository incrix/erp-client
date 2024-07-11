"use client";
import { Stack, Typography, Button, Chip } from "@mui/material";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function Pricing() {
  const [pricingPlan, setPricingPlan] = useState("Yearly");
  const featureList = [
    "Comprehensive Billing System",
    "Inventory Management",
    "Financial Management",
    "Human Resources Management",
    "Real-time Analytics and Reporting",
    "Accessibility over various devices",
    "E-commerce integration",
  ];
  return (
    <Stack
      id="pricing"
      sx={{ backgroundColor: "#000E33" }}
      alignItems={"center"}
    >
      <Stack
        textAlign={"center"}
        padding={"60px 10px"}
        gap={4}
        width={"100%"}
        maxWidth={"1400px"}
      >
        <Stack gap={2}>
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
            Simple, scalable pricing.
          </Typography>
          <Typography variant="paragraph" color={"#B2B6C1"}>
            No extra charges. No hidden fees..
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          direction={{
            sm: "column",
            md: "row",
          }}
          alignItems={{
            sm: "center",
            md: "flex-start",
          }}
          justifyContent={"center"}
          gap={15}
          borderRadius={"15px"}
          p={{
            xs: 4,
            sm: 6,
            md: 10,
          }}
          sx={{
            backgroundColor: "#F2F8FF",
          }}
        >
          <Stack
            textAlign={{
              xs: "center",
              sm: "center",
              md: "start",
            }}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "flex-start",
            }}
            gap={2}
          >
            <Stack
              direction={"row"}
              position={"relative"}
              width={"200px"}
              height={"50px"}
              borderRadius={"25px"}
              padding={"5px"}
              sx={{ backgroundColor: "#000E33" }}
            >
              <Stack
                position={"absolute"}
                width={"100px"}
                height={"40px"}
                borderRadius={"25px"}
                sx={{
                  backgroundColor: "white",
                  transform: `translateX(${
                    pricingPlan === "Monthly" ? 0 : "90px"
                  })`,
                  transition: "all 0.5s ease ",
                }}
              ></Stack>
              <Button
                disableRipple
                fullWidth
                variant="text"
                sx={{
                  color: pricingPlan === "Monthly" ? "#000E33" : "#ffffff",
                  textTransform: "none",
                }}
                onClick={() => setPricingPlan("Monthly")}
              >
                Monthly
              </Button>
              <Button
                disableRipple
                fullWidth
                variant="text"
                sx={{
                  color: pricingPlan === "Yearly" ? "#000E33" : "#ffffff",
                  textTransform: "none",
                }}
                onClick={() => setPricingPlan("Yearly")}
              >
                Annual
              </Button>
            </Stack>
            <Chip
              icon={
                <LocalOfferIcon
                  sx={{
                    fill: "#0080FF",
                  }}
                />
              }
              sx={{
                width: "240px",
                padding: "20px",
                backgroundColor: "transparent",
                fontWeight: 600,
                border: "2px solid #0080FF",
                borderRadius: "50px",
              }}
              label="Launch Offer - 80% off"
            />
            <Typography
              variant="h3"
              fontSize={"30px"}
              color={"#000E33"}
              fontWeight={800}
            >
              Slipze starter
            </Typography>
            <Typography variant="paragraph" color={"#000E33"}>
              Simplified business setup with ERP
              <br /> and billing.
            </Typography>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography
                variant="h2"
                fontWeight={800}
                fontSize={"40px"}
                color={"#000E33"}
              >
                {pricingPlan === "Yearly" ? "₹999/-" : "₹99/-"}
              </Typography>
              <Typography
                variant="h2"
                fontSize={"20px"}
                color={"#8A8A8A"}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {pricingPlan === "Yearly" ? "₹4999/-" : "₹499/-"}
              </Typography>
            </Stack>
            <Typography variant="paragraph" color={"#0080FF"}>
              Save upto{" "}
              {pricingPlan === "Yearly" ? "₹4000/- annually" : "₹400/- monthly"}
            </Typography>
            <CustomButton
              smoothCorners="50"
              backgroundColor="#000E33"
              width="300px"
              height="50px"
            >
              Start a free trial
            </CustomButton>
            <Button
              variant="outlined"
              smoothCorners="15"
              border="2px solid #000E33"
              sx={{
                borderRadius: "10px",
                width: "300px",
                height: "50px",
                color: "#000E33",
                borderColor: "#000E33",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Contact Sales
            </Button>
          </Stack>
          <Stack
            textAlign={{
              xs: "center",
              sm: "center",
              md: "start",
            }}
            gap={4}
          >
            <Typography variant="h6" color={"#000E33"}>
              Exclusive features
            </Typography>
            {featureList.map((feature) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
                key={feature}
              >
                <CheckCircleIcon />
                <Typography variant="paragraph" color={"#"}>
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Typography variant="paragraph" color={"#B2B6C1"}>
          Prices exclude any applicable taxes.
        </Typography>
      </Stack>
    </Stack>
  );
}
