import { Stack, Typography, Chip } from "@mui/material";
import DashImg from "@/public/landing/dash-img.png";
import CustomButton from "../components/CustomButton";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
export default function HeroSection() {
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        height={"100%"}
        marginTop={"40px !important"}
        alignItems={"center"}
        gap={2}
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
          fontSize={{
            xs: 40,
            sm: 40,
            md: 60,
            lg: 80,
            xl: 100,
          }}
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
          fontSize={{
            xs: 16,
            sm: 16,
            md: 18,
            lg: 18,
            xl: 18,
          }}
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
