import CustomStack from "@/app/components/CustomStack";
import CustomTextField from "@/app/components/CustomTextField";
import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import CustomSwitch from "@/app/components/CustomSwitch";
import { useState, useEffect } from "react";
import Icons from "@/util/icons";

export default function AddPayment({ invoiceData, onChangeInvoiceValue }) {
  const [paymentMode, setPaymentMode] = useState(
    invoiceData.transactionDetails.type
  );
  const [isFullyPaid, setIsFullyPaid] = useState(false);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const onFullyPaidChange = (event) => {
    setIsFullyPaid(event.target.checked);
    if (event.target.checked) {
      setAmount(invoiceData.totalPrice);
      setPaymentMode("Cash");
      onChangeInvoiceValue("transactionDetails", {
        type: "Cash",
        notes: invoiceData.transactionDetails.notes,
      });
      onChangeInvoiceValue("paidAmount", invoiceData.totalPrice);
    } else {
      setAmount("");
      onChangeInvoiceValue("paidAmount", 0);
    }
  };

  useEffect(() => {
    if (isFullyPaid && invoiceData.totalPrice !== invoiceData.paidAmount) {
      setAmount(invoiceData.totalPrice);
      onChangeInvoiceValue("paidAmount", invoiceData.totalPrice);
    }
    if(invoiceData.totalPrice == 0){
      setIsFullyPaid(false);
      // setAmount(0);
      // onChangeInvoiceValue("paidAmount", 0);
    }
  }, [invoiceData]);

  const onPaymentTypeChange = (event, newPayment) => {
    setPaymentMode(newPayment);
    onChangeInvoiceValue("transactionDetails", { type: newPayment });
  };

  const onAmountChange = (event) => {
    if (event.target.value === "") {
      setAmount(event.target.value);
      onChangeInvoiceValue("paidAmount", 0);
      return;
    }
    setAmount(parseFloat(event.target.value));
    onChangeInvoiceValue("paidAmount", parseFloat(event.target.value));
  };

  const onNotesChange = (event) => {
    setNotes(event.target.value);
    onChangeInvoiceValue("transactionDetails", { notes: event.target.value, type: paymentMode });
  };

  const toggleButtonStyle = {
    border: "1px solid #82878C !important",
    height: "40px",
    borderRadius: "10px !important",
    gap: "10px",
    textTransform: "none",
    "&.Mui-selected": {
      border: "2px solid #0080FF !important",
      background: "transparent",
      color: "#0080FF",
      "& .icon": {
        backgroundColor: "#0080FF !important",
      },
    },
  };

  return (
    <CustomStack
      gap={2}
      justifyContent={"center"}
      width="100%"
      smoothCorners="20"
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
          <CustomSwitch
            // disabled={invoiceData.totalPrice === 0}
            checked={isFullyPaid}
            onChange={onFullyPaidChange}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <ToggleButtonGroup
          color="primary"
          value={paymentMode}
          exclusive
          onChange={onPaymentTypeChange}
          aria-label="Payment Mode"
          sx={{
            display: "flex",
            width: "100%",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <ToggleButton value="Card" sx={toggleButtonStyle}>
            <Icons.CardIcon color="#82878C" />
            Card
          </ToggleButton>
          <ToggleButton value="UPI" sx={toggleButtonStyle}>
            <Icons.QrIcon color="#82878C" />
            UPI
          </ToggleButton>
          <ToggleButton value="EMI" sx={toggleButtonStyle}>
            <Icons.EMIIcon color="#82878C" />
            EMI
          </ToggleButton>
          <ToggleButton value="Cash" sx={toggleButtonStyle}>
            <Icons.CashIcon color="#82878C" />
            Cash
          </ToggleButton>
          <ToggleButton value="Net Banking" sx={toggleButtonStyle}>
            <Icons.NetBankingIcon color="#82878C" />
            Net Banking
          </ToggleButton>
          <ToggleButton value="Cheque" sx={toggleButtonStyle}>
            <Icons.ChequeIcon color="#82878C" />
            Cheque
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <CustomTextField
          height={"40px"}
          smoothCorners={15}
          placeholder="Enter Amount"
          borderWidth="1px"
          fullWidth
          type="number"
          onChange={onAmountChange}
          value={amount}
          disabled={isFullyPaid}
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
              if (amount === "") {
                setAmount(0);
              }
            },
          }}
        />
        <CustomTextField
          height={"40px"}
          smoothCorners={15}
          fullWidth
          placeholder="Notes , UTR Number, etc."
          borderWidth="1px"
          type="text"
          onChange={onNotesChange}
          value={notes}
        />
      </Stack>
    </CustomStack>
  );
}
