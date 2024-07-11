import { Stack, Typography, Button } from "@mui/material";
import svg1 from "@/public/landing/icons/svg1.svg";
import svg2 from "@/public/landing/icons/svg2.svg";
import svg3 from "@/public/landing/icons/svg3.svg";
export default function ECommerce() {
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
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "40px",
            lg: "56px",
          }}
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
        <Stack
          direction={{
            sm: "column",
            md: "row",
          }}
          alignItems={"center"}
          gap={2}
        >
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
