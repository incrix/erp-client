import CustomStack from "@/app/components/CustomStack";
import CustomTextField from "@/app/components/CustomTextField";
import { Stack, Typography } from "@mui/material";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import CustomeSwitch from "@/app/components/CustomSwitch";

export default function AddPayment() {
    return (
      <CustomStack
        gap={1}
        justifyContent={"center"}
        width="100%"
        smoothCorners="15"
        background="#F8F8F8"
        padding={"20px"}
        borderRadius="20px"
        marginTop="20px"
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            color={"#222429"}
            fontSize={"14px"}
            fontWeight={600}
          >
            Add Payment
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={1}
          >
            <Typography
              variant="h6"
              color={"#222429"}
              fontSize={"14px"}
              fontWeight={600}
            >
              Fully paid
            </Typography>
            <CustomeSwitch />
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <CustomTextField
            height={"40px"}
            smoothCorners={15}
            placeholder="Enter Amount"
            borderWidth="1px"
            fullWidth
            type="number"
            InputProps={{
              startAdornment: (
                <CurrencyRupeeRoundedIcon
                  style={{
                    color: "#82878C",
                    marginRight: "5px",
                  }}
                  fontSize="12px"
                />
              ),
            }}
          />
          <CustomTextField
            height={"40px"}
            smoothCorners={15}
            fullWidth
            placeholder="Notes , UTR Number, etc."
            borderWidth="1px"
            type="text"
          />
        </Stack>
      </CustomStack>
    );
  }