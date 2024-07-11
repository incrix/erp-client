"use client";
import { Stack, Typography, Button } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Icons from "@/util/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        direction={"row"}
        height={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"1400px"}
        width={"100%"}
        padding={"0 20px"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={{
            xs: 0,
            sm: 10,
            md: 10,
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Icons.SlipzeLogo width="30px" height="30px" />
            <Typography color={"white"} fontWeight={"600"}>
              Slipze
            </Typography>
          </Stack>
          <nav>
            <Stack
              direction="row"
              spacing={2}
              display={{
                xs: "none",
                sm: "flex",
                md: "flex",
              }}
            >
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
            onClick={() => router.push("/signin")}
          >
            Log in
          </Button>
          <CustomButton
            smoothCorners="10"
            backgroundColor="#0080FF"
            onClick={() => router.push("/signin")}
          >
            Start free trial
          </CustomButton>
        </Stack>
      </Stack>
    </header>
  );
}
