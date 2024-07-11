import setupImg from "@/public/images/setup-img.png";
import incrixLogo from "@/public/images/incrix-logo.png";
import { Stack, Typography } from "@mui/material";
import CustomButton from "@/app/components/CustomButton";

export default function GetStarted({setUpBusiness}) {
  return (
    <Stack alignItems={"center"} gap={4} padding={"0 20px"}>
      <img
        src={incrixLogo.src}
        style={{
          width: "200px",
        }}
        alt="incrix logo"
      />
      <img
        src={setupImg.src}
        style={{
          maxWidth: "400px",
          width:"80%"
        }}
        alt="Boy learning stunt in cycle"
      />
      <Stack gap={1}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
                xs: "24px",
                sm: "24px",
                md: "32px",
                lg: "32px",
                xl: "34px",
            },
            fontWeight: "400",
            color: "#000E33",
          }}
        >
          Welcome aboard, Avinash!
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: {
                xs: "14px",
                sm: "14px",
                md: "16px",
                lg: "16px",
                xl: "16px",
            },
            fontWeight: "400",
            color: "#7A7A7A",
          }}
        >
          Enter your organization details to get started with Incrix ArthaCraft
          ERP
        </Typography>
      </Stack>

      <CustomButton
        smoothCorners={12}
        width={{
            xs: "250px",
            sm: "300px",
            md: "300px",
            lg: "300px",
            xl: "300px",
        }}
        backgroundColor={"#000E33"}
        onClick={() => setUpBusiness(true)}
      >
        Setup Business
      </CustomButton>
    </Stack>
  );
}