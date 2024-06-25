import CustomeStack from "@/app/components/CustomeStack";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CustomeTextField from "@/app/components/CustomeTextField";

export default function AdditionalCharges() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <CustomeStack
        gap={1}
        justifyContent={"center"}
        width="100%"
        smoothCorners="15"
        background="#F8F8F8"
        padding={"20px"}
        borderRadius="20px"
        marginTop="20px"
        transition="all 0.5s ease-in-out"
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography
              variant="h6"
              color={"#222429"}
              fontSize={"14px"}
              fontWeight={600}
            >
              Discount & Charges
            </Typography>
            <Tooltip title="This discount % will be applied to all products and overwrite any individual product discount.">
              <HelpRoundedIcon
                style={{
                  color: "#82878C",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
                fontSize="12px"
              />
            </Tooltip>
          </Stack>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <AddCircleRoundedIcon
                style={{
                  color: "#000E33",
                }}
              />
            ) : (
              <RemoveCircleRoundedIcon style={{ color: "#F46F6F" }} />
            )}
          </IconButton>
        </Stack>
        {isOpen && (
          <Stack gap={2}>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="caption" color={"#82878C"}>
                Apply discount(%) to all items?
              </Typography>
              <CustomeTextField
                height={"40px"}
                width="120px"
                smoothCorners={15}
                // placeholder="Discount"
                borderWidth="1px"
                type="number"
              />
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="caption" color={"#82878C"}>
                Shipping Charges (within tax)
              </Typography>
              <CustomeTextField
                height={"40px"}
                width="120px"
                smoothCorners={15}
                // placeholder="Discount"
                borderWidth="1px"
                type="number"
              />
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="caption" color={"#82878C"}>
                Packaging Charges (within tax)
              </Typography>
              <CustomeTextField
                height={"40px"}
                width="120px"
                smoothCorners={15}
                // placeholder="Discount"
                borderWidth="1px"
                type="number"
              />
            </Stack>
          </Stack>
        )}
      </CustomeStack>
    );
  }