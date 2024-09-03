import CustomSelect from "@/app/components/CustomSelect";
import CustomStack from "@/app/components/CustomStack";
import {
  ListSubheader,
  Stack,
  Typography,
  MenuItem,
  Chip,
} from "@mui/material";
import { useState, useEffect } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CustomSearchBox from "@/app/components/CustomSearchBox";
import CustomButton from "@/app/components/CustomButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCustomerList } from "@/redux/features/customerList";
import initAlert from "@/util/alertUtil";

export default function SelectCustomer({ onChangeInvoiceValue, invoiceData }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customerList);
  const [customerListFiltered, setCustomerListFiltered] =
    useState(customerList);
  const updateList = async () => {
    await fetch("/api/customer/get-all-cus")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatch(
          updateCustomerList({
            data: data.data,
          })
        );
      });
  };
  useEffect(() => {
    customerList.length == 0 && isLoading && updateList();
    if (customerList.length > 0) setIsLoading(false);
  });

  const renderUnitMenuItem = (option) => {
    return (
      <MenuItem
        onKeyDown={(e) => e.stopPropagation()}
        key={option.id}
        value={option._id}
      >
        <Typography fontWeight={600} color={"#97A1B1"}>
          {option.name}
        </Typography>
        &nbsp;
        <Typography color={"#97A1B1"}>({option.phone})</Typography>
      </MenuItem>
    );
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
    >
      <Typography
        variant="h6"
        color={"#222429"}
        fontSize={"14px"}
        fontWeight={600}
      >
        Select Customer
      </Typography>
      <Stack direction={"row"} gap={1}>
        <CustomSelect
          onChange={(event) => {
            if (invoiceData.cusId.includes(event.target.value)) {
              initAlert({
                title: "Customer already selected",
                autoHideDuration: 3000,
                severity: "warning",
              });
              return;
            }
            onChangeInvoiceValue("cusId", [
              ...invoiceData.cusId,
              event.target.value,
            ]);
          }}
          value={""}
          placeholder={"Customer"}
          options={customerListFiltered}
          width={"300px"}
          height={"40px"}
          renderMenuItem={renderUnitMenuItem}
          startAdornment={
            <PersonRoundedIcon
              style={{
                color: "#82878C",
                marginRight: "5px",
              }}
              fontSize="12px"
            />
          }
          listSubheader={
            <ListSubheader
              sx={{
                // backgroundColor: "#F8F8F8",
                margin: "10px 0",
              }}
            >
              <Stack gap={1}>
                <CustomSearchBox
                  options={customerList}
                  setUnitListFiltered={setCustomerListFiltered}
                  isNumEnabled={true}
                  textPram={"name"}
                  numParam={"phone"}
                />
                <CustomButton
                  width="100%"
                  smoothCorners="15"
                  backgroundColor="#97A1B1"
                >
                  Add Customer
                </CustomButton>
              </Stack>
            </ListSubheader>
          }
        />
        <input
          style={{
            width: "40%",
            height: "40px",
            border: "1px solid #82878C",
            borderRadius: "10px",
            padding: "0 10px",
            color: "#82878C",
            fontSize: "14px",
            fontWeight: "500",
            "--smooth-corners": "15",
            maskImage: "paint(smooth - corners)",
            "-webkit-mask-image": "paint(smooth-corners)",
          }}
          type="date"
          placeholder="Pick invoice date"
          value={`${invoiceData.date.split("-")[2]}-${
            invoiceData.date.split("-")[1]
          }-${invoiceData.date.split("-")[0]}`}
          onChange={(event) => {
            const date = event.target.value.split("-");
            onChangeInvoiceValue("date", `${date[2]}-${date[1]}-${date[0]}`);
          }}
        />
      </Stack>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {invoiceData.cusId &&
          invoiceData.cusId.length > 0 &&
          invoiceData.cusId.map((cusId, index) => {
            return (
              <Chip
                label={customerList.find((cus) => cus._id === cusId).name}
                variant="outlined"
                sx={{
                  color: "#0080FF",
                  borderColor: "#0080FF",
                  "& .MuiChip-deleteIcon": {
                    color: "#F46F6F",
                    "&:hover": {
                      color: "#F46F6F",
                    },
                  },
                }}
                onDelete={(e) => {
                  onChangeInvoiceValue(
                    "cusId",
                    invoiceData.cusId.filter((id) => id !== cusId)
                  );
                }}
              />
            );
          })}
      </Stack>
    </CustomStack>
  );
}
