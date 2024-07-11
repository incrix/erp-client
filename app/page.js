import { Stack, Typography, Button, Chip, Divider } from "@mui/material";
import Link from "next/link";
import CustomButton from "./components/CustomButton";
import SlipzeLogo from "@/public/landing/slipze-logo.svg";
import DashImg from "@/public/landing/dash-img.png";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import scaleup from "@/public/landing/scaleup.jpg";
import feature01 from "@/public/landing/feature-01.png";
import bgSvg from "@/public/landing/bg.svg";
import posIcon from "@/public/landing/icons/pos-icon.svg";
import inventoryIcon from "@/public/landing/icons/inventory-icon.svg";
import reportIcon from "@/public/landing/icons/report-icon.svg";
import commIcon from "@/public/landing/icons/comm-icon.svg";
import purIcon from "@/public/landing/icons/pur-icon.svg";
import paymentIcon from "@/public/landing/icons/payment-icon.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import svg1 from "@/public/landing/icons/svg1.svg";
import svg2 from "@/public/landing/icons/svg2.svg";
import svg3 from "@/public/landing/icons/svg3.svg";
import IncrixLogoLight from "@/public/images/incrix-logo-light.png";

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        // maxWidth: "1400px",
        // padding: "0 20px",
      }}
    >
      <Stack
        position={"absolute"}
        width={"100%"}
        height={"80vh"}
        minHeight={"800px"}
        justifyContent={"center"}
        sx={{
          top: 0,
          left: 0,
          backgroundColor: "#000E33",
          zIndex: -1,
        }}
      >
        <img src={bgSvg.src} height={"60%"} />
      </Stack>
      <Header />
      <HeroSection />
      <ScaleUp />
      <Features featuresList={featuresList} />
      <QuickReview />
      <Pricing />
      <ECommerce />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        direction={"row"}
        height={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"1400px"}
        width={"100%"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={10}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <img src={SlipzeLogo.src} alt="Slipze Logo" />
            <Typography color={"white"} fontWeight={"600"}>
              Slipze
            </Typography>
          </Stack>
          <nav>
            <Stack direction="row" spacing={2}>
              <Link href={"/#feature"} style={{ color: "white" }}>
                Features
              </Link>
              <Link href={"/#pricing"} style={{ color: "white" }}>
                Pricing
              </Link>
            </Stack>
          </nav>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="text"
            sx={{
              color: "white",
              textTransform: "none",
            }}
          >
            Log in
          </Button>
          <CustomButton smoothCorners="10" backgroundColor="#0080FF">
            Start free trial
          </CustomButton>
        </Stack>
      </Stack>
    </header>
  );
}

function HeroSection() {
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        height={"100%"}
        marginTop={"40px !important"}
        alignItems={"center"}
        spacing={2}
        padding={"0 20px"}
      >
        <Chip
          icon={
            <MilitaryTechIcon
              sx={{
                fill: "#0080FF",
              }}
            />
          }
          sx={{
            padding: "20px 40px",
            backgroundColor: "white",
            fontWeight: 600,
            border: "2px solid #0080FF",
            borderRadius: "50px",
          }}
          label="Best E-commerce Management Software"
        />
        <Typography
          fontSize={80}
          textAlign={"center"}
          fontWeight={600}
          color={"white"}
          marginTop={"-10px !important"}
        >
          Setup your business <br /> in 10 minutes!
        </Typography>
        <Typography
          variant="paragraph"
          color={"rgba(255, 255, 255, 0.6)"}
          textAlign={"center"}
          lineHeight={"30px"}
          fontSize={18}
        >
          Your affordable, user-friendly solution for modern retail success.
          Sell better, manage <br /> smarter, and embrace the digital revolution
        </Typography>
        <Stack
          width={"100%"}
          marginTop={"40px !important"}
          alignItems={"center"}
          spacing={2}
        >
          <CustomButton
            smoothCorners="15"
            backgroundColor="#0080FF"
            width="300px"
            height="50px"
          >
            Start free 30-day trial
          </CustomButton>
          <Typography variant="paragraph" color={"rgba(255, 255, 255, 0.6)"}>
            No credit card required.
          </Typography>
        </Stack>
        <img
          src={DashImg.src}
          style={{ maxWidth: "100%", marginTop: "40px !important" }}
        />
      </Stack>
    </Stack>
  );
}

function ScaleUp() {
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        direction={"row"}
        alignItems={"center"}
        spacing={12}
        marginTop={"200px"}
      >
        <img src={scaleup.src} width={"45%"} />
        <Stack spacing={4}>
          <Typography variant="h3" fontWeight={800} fontSize={"40px"}>
            We help you to scaleup your business.
          </Typography>
          <Typography
            variant="paragraph"
            fontSize={"18px"}
            color={"#58575A"}
            lineHeight={"28px"}
          >
            Introducing Slipze, a seamless solution for businesses of all sizes.
            Effortlessly manage inventory, process transactions, and streamline
            operations. With customizable features and intuitive interfaces,
            it's the ultimate tool for optimizing your business efficiency and
            driving growth. Step to your ecommerce journey effortlessly.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

function Features({ featuresList }) {
  return (
    <Stack alignItems={"center"}>
      <Stack
        id="feature"
        marginTop={"200px"}
        gap={10}
        width={"100%"}
        maxWidth={"1400px"}
      >
        {featuresList.map((feature) => (
          <>
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Stack gap={4} maxWidth={"50%"}>
                <Typography
                  variant="paragraph"
                  fontWeight={800}
                  color={"#0080FF"}
                >
                  {feature.id}
                </Typography>
                <Typography variant="h3" fontWeight={800} fontSize={"40px"}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  fontSize={"18px"}
                  color={"#58575A"}
                  lineHeight={"28px"}
                >
                  {feature.description}
                </Typography>
              </Stack>
              <img src={feature01.src} style={{ maxWidth: "560px" }} />
            </Stack>
            <Divider />
          </>
        ))}
      </Stack>
    </Stack>
  );
}

function QuickReview() {
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
        <Typography variant="h3" fontWeight={800} fontSize={40} color={"white"}>
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

function Pricing() {
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
            fontSize={40}
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
          direction={"row"}
          justifyContent={"center"}
          gap={15}
          borderRadius={"15px"}
          p={10}
          sx={{
            backgroundColor: "#F2F8FF",
          }}
        >
          <Stack textAlign={"start"} gap={2}>
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
                ₹999/-
              </Typography>
              <Typography
                variant="h2"
                fontSize={"20px"}
                color={"#8A8A8A"}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                ₹4999/-
              </Typography>
            </Stack>

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
          <Stack textAlign={"start"} gap={4}>
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

function ECommerce() {
  return (
    <Stack
      alignItems={"center"}
      sx={{
        backgroundColor: "#F2F8FF",
      }}
    >
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        alignItems={"center"}
        p={10}
        gap={4}
        position={"relative"}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          fontSize={"56px"}
          color={"#212328"}
          textAlign={"center"}
        >
          Craft the perfect <font style={{ color: "#0080FF" }}>e-commerce</font>{" "}
          site,
          <br /> that scales your business.
        </Typography>
        <Typography variant="paragraph" color={"#60656A"}>
          Try Slipze today.
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "5px",
              width: "300px",
              height: "50px",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "#001E39",
              "&:hover": {
                backgroundColor: "#001E39",
                color: "white",
              },
            }}
          >
            Start free 90-day trial
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "5px",
              width: "300px",
              height: "50px",
              color: "#000E33",
              borderColor: "#000E33",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                borderColor: "#001E39",
              },
            }}
          >
            Contact Sales
          </Button>
        </Stack>
        <img
          src={svg1.src}
          style={{ position: "absolute", top: "200px", left: "15%" }}
        />
        <img
          src={svg2.src}
          style={{ position: "absolute", bottom: "200px", right: "10%" }}
        />
        <img
          src={svg3.src}
          style={{ position: "absolute", bottom: 0, left: "20%" }}
        />
        <Typography variant="paragraph" color={"#60656A"}>
          No credit card required.
        </Typography>
      </Stack>
    </Stack>
  );
}

function Footer() {
  return (
    <Stack
      sx={{
        backgroundColor: "#100F13",
      }}
      alignItems={"center"}
    >
      <Stack width={"100%"} maxWidth={"1400px"} padding={"60px 20px"} gap={4}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack gap={2}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <img src={SlipzeLogo.src} alt="Slipze Logo" />
              <Typography color={"white"} fontWeight={"600"}>
                Slipze
              </Typography>
            </Stack>
            <Typography variant="paragraph" color={"white"} width={"60%"}>
              This powerful ERP software streamlines billing, inventory, and
              eCommerce with real-time analytics and automated workflows.
              Platform-independent, it adapts seamlessly to your business needs.
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Typography variant="paragraph" color={"white"}>
              A Product of
            </Typography>
            <img src={IncrixLogoLight.src} alt="Incrix Logo" width={"350px"} />
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: "#2D2C2F" }} />
        <Stack direction={"row"} gap={2}>
          <Typography variant="paragraph" color={"#9F9FA1"}>
            Slipze © 2024, All rights reserved.
          </Typography>
          <Link href={"/"} style={{ color: "white" }}>
            Privacy notice
          </Link>
          <Link href={"/"} style={{ color: "white" }}>
            Legal
          </Link>
          <Link href={"/"} style={{ color: "white" }}>
            Cookie settings
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

const featuresList = [
  {
    id: "01.",
    title: "Add Your Business Effortlessly Within 10 Minutes",
    description:
      "Setting up your business should be the easiest part of running it. With Slipze, you can add your business details effortlessly and be up and running within just 10 minutes. Our intuitive interface guides you through each step, from entering your business information to configuring your initial settings. Whether you are a small business owner or managing a large enterprise, Slipze simplifies the setup process so you can focus on what matters most—growing your business.",
    imgSrc: feature01.src,
  },
  {
    id: "02.",
    title: "Multi-Platform POS System For Invoicing",
    description:
      "Slipze's multi-platform POS system is designed to streamline your invoicing process across various devices. Whether you are using a desktop, tablet, or smartphone, you can generate and manage invoices with ease. Our POS system ensures that your sales data is synchronized in real-time, allowing you to access it from anywhere, anytime. This flexibility means you can serve your customers efficiently and keep your business operations smooth and uninterrupted.",
    imgSrc: "",
  },
  {
    id: "03.",
    title: "Track all the in and out payments",
    description:
      "Keep your financial transactions in check with Slipze's comprehensive payment tracking feature. Our software allows you to monitor all incoming and outgoing payments effortlessly. You can generate detailed reports, set up automated reminders for overdue payments, and maintain a clear view of your cash flow. With Slipze, you can ensure that every transaction is accounted for, giving you peace of mind and helping you make informed financial decisions.",
    imgSrc: "",
  },
  {
    id: "04.",
    title: "Manage Every Vendors at One Place",
    description:
      "Vendor management is crucial for maintaining strong business relationships and ensuring a smooth supply chain. Slipze provides a centralized platform where you can manage all your vendors in one place. From tracking orders and payments to monitoring performance and communication, our software helps you stay organized and efficient. Slipze's vendor management feature ensures that you have all the information you need at your fingertips, enabling you to build stronger partnerships and run your business more effectively.",
    imgSrc: "",
  },
];
