"use client";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomStack from "@/app/components/CustomStack";
import { useRouter, usePathname } from "next/navigation";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function NavButton({
  icon,
  title,
  href,
  isChild,
  isLight,
  childNavList,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <CustomStack
      background={pathname == href ? "rgba(130,135,140,30%)" : "transparent"}
      smoothCorners={"12"}
      width="100%"
      minHeight="50px"
      height={isChild && open ? `${60 + childNavList.length * 35}px` : "50px"}
      borderRadius={"10px"}
      justifyContent={isChild ? "start": "center"}
      padding={isChild ? "13px 15px" :"0 15px"}
      gap={1}
      transition="all 0.25s ease-out"
      onClick={() => {
        !isChild ? router.push(href) : handleClick();
      }}
      hover={{
        background: isLight? "rgba(130,135,140,10%)" :"rgba(130,135,140,30%)",
        transition: "all 0.25s ease-out",
      }}
      cursor="pointer"
    >
      <Stack
        direction="row"
        alignItems={"center"}
        gap={2}
        sx={{
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        }}
      >
        {icon}
        <Typography
          variant="p"
          fontSize={"13px"}
          sx={{
            color: isLight? "#97A1B1" : "white",
            fontWeight: isLight? "600" : "400",
          }}
        >
          {title}
        </Typography>
        {isChild && (
          <KeyboardArrowDownRoundedIcon
            sx={{
              color: "white",
              transform: open ? "rotate(180deg)" : "rotate(00deg)",
              marginLeft: "auto",
              fontSize: "26px",
              transition: "all 0.25s ease-out",
            }}
          />
        )}
      </Stack>
      {isChild && open && (
        <Stack>
          {childNavList.map((item) => (
            <CustomStack
              background={
                pathname == item.href ? "rgba(130,135,140,30%)" : "transparent"
              }
              smoothCorners={"12"}
              width="100%"
              height="35px"
              borderRadius={"10px"}
              justifyContent={"center"}
              padding={"0 35px"}
              hover={{
                background: "rgba(130,135,140,30%)",
                transition: "all 0.25s ease-out",
              }}
              onClick={() => router.push(item.href)}
            >
              <Typography
                variant="p"
                fontSize={"13px"}
                sx={{
                  color: "white",
                  "-webkit-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                }}
              >
                {item.title}
              </Typography>
            </CustomStack>
          ))}
        </Stack>
      )}
    </CustomStack>
  );
}
