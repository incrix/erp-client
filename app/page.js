import { Stack } from "@mui/material";
import feature01 from "@/public/landing/feature-01.png";
import bgSvg from "@/public/landing/bg.svg";
import Header from "./landingPageComp/Header";
import HeroSection from "./landingPageComp/HeroSection";
import ScaleUp from "./landingPageComp/ScaleUp";
import Features from "./landingPageComp/Features";
import QuickReview from "./landingPageComp/QuickReview";
import Pricing from "./landingPageComp/Pricing";
import ECommerce from "./landingPageComp/ECommerce";
import Footer from "./landingPageComp/Footer";

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
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
    imgSrc: feature01.src,
  },
  {
    id: "03.",
    title: "Track all the in and out payments",
    description:
      "Keep your financial transactions in check with Slipze's comprehensive payment tracking feature. Our software allows you to monitor all incoming and outgoing payments effortlessly. You can generate detailed reports, set up automated reminders for overdue payments, and maintain a clear view of your cash flow. With Slipze, you can ensure that every transaction is accounted for, giving you peace of mind and helping you make informed financial decisions.",
    imgSrc: feature01.src,
  },
  {
    id: "04.",
    title: "Manage Every Vendors at One Place",
    description:
      "Vendor management is crucial for maintaining strong business relationships and ensuring a smooth supply chain. Slipze provides a centralized platform where you can manage all your vendors in one place. From tracking orders and payments to monitoring performance and communication, our software helps you stay organized and efficient. Slipze's vendor management feature ensures that you have all the information you need at your fingertips, enabling you to build stronger partnerships and run your business more effectively.",
    imgSrc: feature01.src,
  },
];
