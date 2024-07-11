import { Stack, Typography, Divider } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import IncrixLogoLight from "@/public/images/incrix-logo-light.png";
import Link from "next/link";
import Icons from "@/util/icons";

export default function Footer() {
  return (
    <Stack
      sx={{
        backgroundColor: "#100F13",
      }}
      alignItems={"center"}
    >
      <Stack width={"100%"} maxWidth={"1400px"} padding={"60px 20px"} gap={4}>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
          justifyContent={"space-between"}
          spacing={4}
        >
          <Stack
            gap={2}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Icons.SlipzeLogo width="30px" height="30px" />
              <Typography color={"white"} fontWeight={"600"}>
                Slipze
              </Typography>
            </Stack>
            <Typography
              variant="paragraph"
              color={"white"}
              textAlign={{
                xs: "center",
                sm: "center",
                md: "start",
                lg: "start",
              }}
              width={{
                xs: "100%",
                sm: "60%",
                md: "80%",
                lg: "60%",
              }}
            >
              This powerful ERP software streamlines billing, inventory, and
              eCommerce with real-time analytics and automated workflows.
              Platform-independent, it adapts seamlessly to your business needs.
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <AndroidIcon sx={{ fill: "white" }} />
              <WindowIcon sx={{ fill: "white" }} />
              <AppleIcon sx={{ fill: "white" }} />
            </Stack>
          </Stack>
          <Stack
            gap={2}
            textAlign={{
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            }}
          >
            <Typography variant="paragraph" color={"white"}>
              A Product of
            </Typography>
            <img src={IncrixLogoLight.src} alt="Incrix Logo" width={"350px"} />
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: "#2D2C2F" }} />
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
          flexWrap={"wrap"}
        >
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
