import CustomStack from "@/app/components/CustomStack";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CustomTextField from "@/app/components/CustomTextField";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";

export default function AdditionalCharges({
  invoiceData,
  onChangeInvoiceValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState(invoiceData.discount.value);
  const [deliveryCharges, setDeliveryCharges] = useState(
    invoiceData.additionalCharges.delivery.value
  );
  const [packagingCharges, setPackagingCharges] = useState(
    invoiceData.additionalCharges.package.value
  );

  const onDiscountChange = (e) => {
    setDiscount(e.target.value);
    const discount = invoiceData.discount;
    if (e.target.value === "") {
      discount.value = 0;
      onChangeInvoiceValue("discount", discount);
      return;
    }
    discount.value = parseInt(e.target.value);
    onChangeInvoiceValue("discount", discount);
  };

  const onDeliveryChargesChange = (e) => {
    setDeliveryCharges(e.target.value);
    const additionalCharges = invoiceData.additionalCharges;
    if (e.target.value === "") {
      additionalCharges.delivery.value = 0;
      onChangeInvoiceValue("additionalCharges", additionalCharges);
      return;
    }
    additionalCharges.delivery.value = parseInt(e.target.value);
    onChangeInvoiceValue("additionalCharges", additionalCharges);
  };

  const onPackagingChargesChange = (e) => {
    setPackagingCharges(e.target.value);
    const additionalCharges = invoiceData.additionalCharges;
    if (e.target.value === "") {
      additionalCharges.package.value = 0;
      onChangeInvoiceValue("additionalCharges", additionalCharges);
      return;
    }
    additionalCharges.package.value = parseInt(e.target.value);
    onChangeInvoiceValue("additionalCharges", additionalCharges);
  };

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
            <Typography variant="caption" color={"#82878C"} width={"180px"}>
              Apply extra discount (%)
            </Typography>
            <CustomTextField
              height={"40px"}
              width="120px"
              smoothCorners={15}
              // placeholder="Discount"
              borderWidth="1px"
              type="number"
              value={discount}
              onChange={onDiscountChange}
              InputProps={{
                startAdornment: (
                  <PercentRoundedIcon
                    style={{
                      color: "#82878C",
                      marginRight: "5px",
                    }}
                    fontSize="12px"
                  />
                ),
                onBlur: () => {
                  if (discount === "") {
                    setDiscount(0);
                    const discount = invoiceData.discount;
                    discount.value = 0;
                    onChangeInvoiceValue("discount", discount);
                  }
                },
              }}
            />
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography variant="caption" color={"#82878C"} width={"180px"}>
              Shipping Charges (within tax)
            </Typography>
            <CustomTextField
              height={"40px"}
              width="120px"
              smoothCorners={15}
              // placeholder="Discount"
              value={deliveryCharges}
              onChange={onDeliveryChargesChange}
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
                onBlur: () => {
                  if (deliveryCharges === "") {
                    setDeliveryCharges(0);
                    const additionalCharges = invoiceData.additionalCharges;
                    additionalCharges.delivery.value = 0;
                    onChangeInvoiceValue(
                      "additionalCharges",
                      additionalCharges
                    );
                  }
                },
              }}
              borderWidth="1px"
              type="number"
            />
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography variant="caption" color={"#82878C"} width={"180px"}>
              Packaging Charges (within tax)
            </Typography>
            <CustomTextField
              height={"40px"}
              width="120px"
              smoothCorners={15}
              // placeholder="Discount"
              value={packagingCharges}
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
                onBlur: () => {
                  if (packagingCharges === "") {
                    setPackagingCharges(0);
                    const additionalCharges = invoiceData.additionalCharges;
                    additionalCharges.package.value = 0;
                    onChangeInvoiceValue(
                      "additionalCharges",
                      additionalCharges
                    );
                  }
                },
              }}
              onChange={onPackagingChargesChange}
              borderWidth="1px"
              type="number"
            />
          </Stack>
        </Stack>
      )}
    </CustomStack>
  );
}
