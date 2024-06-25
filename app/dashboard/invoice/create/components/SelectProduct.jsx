import CustomSelect from "@/app/components/CustomSelect";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeStack from "@/app/components/CustomeStack";
import CustomeTextField from "@/app/components/CustomeTextField";
import Icons from "@/util/icons";
import { MenuItem, Stack, Typography } from "@mui/material";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";

export default function SelectProduct() {
    const renderTaxMenuItem = (option) => {
      return (
        <MenuItem
          onKeyDown={(e) => e.stopPropagation()}
          key={option}
          value={option}
        >
          <Typography color={"#97A1B1"}>{option}</Typography>
        </MenuItem>
      );
    };
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
      >
        <Typography
          variant="h6"
          color={"#222429"}
          fontSize={"14px"}
          fontWeight={600}
        >
          Add Product
        </Typography>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <CustomeTextField
            width={"400px"}
            height={"40px"}
            smoothCorners={15}
            placeholder={"Search by name or code"}
            borderWidth="1px"
            type="text"
            onChange={(e) => {}}
            InputProps={{
              startAdornment: (
                <Icons.ProductIcon
                  color="#82878C"
                  width="18px"
                  margin="0 5px 0 0"
                />
              ),
              endAdornment: (
                <CustomSelect
                  onChange={(event) => {}}
                  value={"All Category"}
                  border={"none"}
                  placeholder={"Without Tax"}
                  options={["Without Tax", "Within Tax"]}
                  width={"130px !important"}
                  height={"40px"}
                  renderMenuItem={renderTaxMenuItem}
                />
              ),
            }}
          />
          <CustomeButton
            smoothCorners={10}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            width={"160px"}
            startIcon={<QrCodeScannerRoundedIcon />}
            // onClick={() => router.push("/dashboard/invoice/create")}
          >
            Scan code
          </CustomeButton>
        </Stack>
      </CustomeStack>
    );
  }