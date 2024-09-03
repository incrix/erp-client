import CustomStack from "@/app/components/CustomStack";
import { IconButton, MenuItem, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTextField from "@/app/components/CustomTextField";
import CustomSelect from "@/app/components/CustomSelect";
import { useEffect, useState } from "react";

export default function ItemList({ invoiceData, onChangeInvoiceValue }) {
  return (
    <CustomStack
      gap={1}
      justifyContent={"center"}
      width="100%"
      smoothCorners="30"
      background="#F8F8F8"
      padding={"20px"}
      borderRadius="20px"
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography variant="h3" fontSize={"16px"} fontWeight={600}>
          Items
        </Typography>
        <Typography
          fontWeight={600}
          sx={{
            backgroundColor: "#C2CDF6",
            color: "#6681E8",
            padding: "2px 10px",
            borderRadius: "10px",
          }}
        >
          {invoiceData.items.reduce((n, { quantity }) => n + quantity, 0)}
        </Typography>
      </Stack>

      <Stack
        gap={1}
        height={"100%"}
        maxHeight={"800px"}
        minHeight={"405px"}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#F8F8F8",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(151, 161, 177, 0.5)",
            borderRadius: "5px",
            "&:hover": {
              background: "rgb(151, 161, 177)",
            },
          },
        }}
      >
        {invoiceData.items.map((item, index) => {
          return (
            <Item
              key={item.productId}
              item={item}
              index={index}
              invoiceData={invoiceData}
              onChangeInvoiceValue={onChangeInvoiceValue}
            />
          );
        })}
        {invoiceData.items.length === 0 && (
          <Stack
            width={"100%"}
            height={"400px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography color={"#888888"} fontSize={"14px"}>
              No items found. Add a new item to continue.
            </Typography>
          </Stack>
        )}
      </Stack>
    </CustomStack>
  );
}

function Item({ item, index, onChangeInvoiceValue, invoiceData }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [unitPrice, setUnitPrice] = useState(item.unitPrice);
  const [price, setPrice] = useState(item.price);
  const [discount, setDiscount] = useState(item.discount.percentage);

  useEffect(() => {
    quantity !== "" && setQuantity(item.quantity);
    unitPrice !== "" && setUnitPrice(item.unitPrice);
    price !== "" && setPrice(item.price);
    // discount !== "" && setDiscount(item.discount.value);
  }, [invoiceData]);

  const onQuantityChange = (event) => {
    const items = invoiceData.items;
    if (event.target.value === "") {
      setQuantity(event.target.value);
      items[index].quantity = 0;
      items[index].totalPrice = 0;
      onChangeInvoiceValue("items", items);
      return;
    }
    setQuantity(parseInt(event.target.value));
    items[index].quantity = parseInt(event.target.value);
    items[index].totalPrice =
      (items[index].price - items[index].discount.amount) *
      items[index].quantity;
    onChangeInvoiceValue("items", items);
  };

  const onQuantityIncrement = () => {
    const items = invoiceData.items;
    items[index].quantity++;
    items[index].totalPrice =
      (items[index].price - items[index].discount.amount) *
      items[index].quantity;
    onChangeInvoiceValue("items", items);
  };

  const onQuantityDecrement = () => {
    const items = invoiceData.items;
    if (items[index].quantity > 1) {
      items[index].quantity--;
      items[index].totalPrice =
        (items[index].price - items[index].discount.amount) *
        items[index].quantity;
      onChangeInvoiceValue("items", items);
    }
  };

  const onUnitPriceChange = (event) => {
    const items = invoiceData.items;
    if (event.target.value === "") {
      setUnitPrice(event.target.value);
      items[index].unitPrice = 0;
      items[index].price = 0;
      items[index].tax.igst.amount = 0;
      items[index].tax.cgst.amount = 0;
      items[index].tax.sgst.amount = 0;
      items[index].totalPrice = 0;
      setPrice(0);
      onChangeInvoiceValue("items", items);
      return;
    }
    setUnitPrice(parseFloat(event.target.value));
    items[index].unitPrice = parseFloat(event.target.value);
    items[index].price =
      items[index].unitPrice +
      (items[index].unitPrice * items[index].tax.igst.percentage) / 100;
    items[index].tax.igst.amount =
      (items[index].unitPrice * items[index].tax.igst.percentage) / 100;
    items[index].tax.cgst.amount = items[index].tax.igst.amount / 2;
    items[index].tax.sgst.amount = items[index].tax.igst.amount / 2;
    if (items[index].discount.type == "%") {
      items[index].discount.value =
        (items[index].discount.amount * 100) / items[index].price;
      setDiscount(items[index].discount.value);
    }
    items[index].totalPrice =
      (items[index].price - items[index].discount.amount) *
      items[index].quantity;
    onChangeInvoiceValue("items", items);
  };

  const onPriceChange = (event) => {
    const items = invoiceData.items;
    if (event.target.value === "") {
      setPrice(event.target.value);
      items[index].price = 0;
      amount;
      items[index].unitPrice = 0;
      items[index].tax.igst.amount = 0;
      items[index].tax.cgst.amount = 0;
      items[index].tax.sgst.amount = 0;
      items[index].totalPrice = 0;
      setUnitPrice(0);
      onChangeInvoiceValue("items", items);
      return;
    }
    setPrice(parseFloat(event.target.value));
    items[index].price = parseFloat(event.target.value);
    items[index].unitPrice =
      (items[index].price * 100) / (100 + items[index].tax.igst.percentage);
    items[index].tax.igst.amount = items[index].price - items[index].unitPrice;
    items[index].tax.cgst.amount = items[index].tax.igst.amount / 2;
    items[index].tax.sgst.amount = items[index].tax.igst.amount / 2;
    items[index].discount.amount =
      (item[index].discount.percentage * items[index].price) / 100;
    //   items[index].discount.value =
    //     (items[index].discount.amount * 100) / items[index].price;
    //   setDiscount(items[index].discount.value);
    // }
    items[index].totalPrice =
      (items[index].price - items[index].discount.amount) *
      items[index].quantity;
    onChangeInvoiceValue("items", items);
  };

  const onDiscountChange = (event) => {
    const items = invoiceData.items;
    if (event.target.value === "") {
      setDiscount(event.target.value);
      items[index].discount.percentage = 0;
      items[index].discount.amount = 0;
      items[index].totalPrice = items[index].price * items[index].quantity;
      onChangeInvoiceValue("items", items);
      return;
    }

    if (event.target.value > 100 || event.target.value < 0) return;

    setDiscount(parseInt(event.target.value));

    items[index].discount.type === "%"
      ? (items[index].discount.percentage = parseInt(event.target.value))
      : (items[index].discount.amount = parseFloat(event.target.value));

    items[index].discount.type === "%"
      ? (items[index].discount.amount =
          (items[index].discount.percentage * items[index].price) / 100)
      : (items[index].discount.percentage =
          (items[index].discount.amount * 100) / items[index].price);

    // items[index].discount.value = parseFloat(event.target.value);
    // items[index].discount.amount =
    //   items[index].discount.type === "₹"
    //     ? items[index].discount.value
    //     : (items[index].discount.value * items[index].price) / 100;

    items[index].totalPrice =
      (items[index].price - items[index].discount.amount) *
      items[index].quantity;
    onChangeInvoiceValue("items", items);
  };

  const onDiscountTypeChange = (event) => {
    const items = invoiceData.items;
    items[index].discount.type = event.target.value;
    if (event.target.value === "%") {
      setDiscount(items[index].discount.percentage);
    }
    if (event.target.value === "₹") {
      setDiscount(items[index].discount.amount);
    }
    // if (event.target.value === "%") {
    //   items[index].discount.value =
    //     (items[index].discount.amount * 100) / items[index].price;
    //   setDiscount(items[index].discount.value);
    // }
    // if (event.target.value === "₹") {
    //   setDiscount(items[index].discount.amount);
    // }
    onChangeInvoiceValue("items", items);
  };

  const onDelete = (event) => {
    const items = invoiceData.items;
    items.splice(index, 1);
    onChangeInvoiceValue("items", items);
  };

  const renderTaxMenuItem = (option) => {
    return (
      <MenuItem
        onKeyDown={(e) => e.stopPropagation()}
        key={option}
        value={option}
        sx={{ width: "100%" }}
      >
        <Typography width={"100%"} textAlign={"center"} color={"#97A1B1"}>
          {option}
        </Typography>
      </MenuItem>
    );
  };

  return (
    <Stack>
      <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={1}>
          <Typography
            variant="h6"
            color={"#82878C"}
            fontSize={"14px"}
            fontWeight={600}
          >
            #{index + 1}
          </Typography>
          <Typography
            variant="h6"
            color={"#222429"}
            fontSize={"14px"}
            fontWeight={600}
          >
            {item.name}
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={2}>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <IconButton
              onClick={onQuantityDecrement}
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "#82878C",
                color: "white",
                "&:hover": { backgroundColor: "#82878C" },
              }}
            >
              <RemoveIcon style={{ fontSize: 16 }} />
            </IconButton>
            <CustomTextField
              smoothCorners="10"
              width="60px"
              height="30px"
              borderRadius="2px"
              type="number"
              onChange={onQuantityChange}
              value={quantity}
              InputProps={{
                onBlur: (e) => {
                  quantity === "" && setQuantity(0);
                },
              }}
              sx={{
                "& input[type=number]": {
                  textAlign: "center",
                  "-moz-appearance": "textfield",
                  "&::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    "-moz-appearance": "none",
                    appearance: "none",
                    margin: 0,
                  },
                  "&::-webkit-inner-spin-button": {
                    "-webkit-appearance": "none",
                    "-moz-appearance": "none",
                    appearance: "none",
                    margin: 0,
                  },
                },
              }}
            />
            <IconButton
              onClick={onQuantityIncrement}
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "#82878C",
                color: "white",
                "&:hover": { backgroundColor: "#82878C" },
              }}
            >
              <AddIcon style={{ fontSize: 16 }} />
            </IconButton>
          </Stack>
          <IconButton
            onClick={onDelete}
            sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}
          >
            <DeleteIcon sx={{ color: "#F46F6F", fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
        <Stack>
          <Typography variant="caption" color={"#82878C"}>
            Unit price
          </Typography>
          <CustomTextField
            smoothCorners="15"
            height="30px"
            width="140px"
            borderRadius="2px"
            type="number"
            p="0"
            onChange={onUnitPriceChange}
            value={unitPrice}
            InputProps={{
              startAdornment: (
                <CustomStack
                  width={"60px"}
                  height={"100%"}
                  alignItems="center"
                  justifyContent="center"
                  smoothCorners="12"
                  sx={{
                    backgroundColor: "#82878C",
                    borderRadius: "2px",
                    marginRight: "10px",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: 600 }}>
                    ₹
                  </Typography>
                </CustomStack>
              ),
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="caption" color={"#82878C"}>
            Price with tax
          </Typography>
          <CustomTextField
            smoothCorners="15"
            height="30px"
            width="140px"
            borderRadius="2px"
            value={price}
            onChange={onPriceChange}
            type="number"
            p="0"
            InputProps={{
              startAdornment: (
                <CustomStack
                  width={"60px"}
                  height={"100%"}
                  alignItems="center"
                  justifyContent="center"
                  smoothCorners="12"
                  sx={{
                    backgroundColor: "#82878C",
                    borderRadius: "2px",
                    marginRight: "10px",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: 600 }}>
                    ₹
                  </Typography>
                </CustomStack>
              ),
              onBlur: (e) => {
                price === "" && setPrice(0);
              },
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="caption" color={"#82878C"}>
            Discount
          </Typography>
          <CustomTextField
            smoothCorners="15"
            width="140px"
            height="30px"
            borderRadius="2px"
            type="number"
            onChange={onDiscountChange}
            value={discount}
            // value={item.discount.value}
            p="0"
            InputProps={{
              startAdornment: (
                <CustomStack
                  width={"100px"}
                  height={"100%"}
                  alignItems="center"
                  justifyContent="center"
                  smoothCorners="12"
                  sx={{
                    backgroundColor: "#82878C",
                    borderRadius: "2px",
                    marginRight: "10px",
                  }}
                >
                  <CustomSelect
                    onChange={onDiscountTypeChange}
                    color="white"
                    value={item.discount.type}
                    border={"none"}
                    borderRadius="5px"
                    placeholder={"₹"}
                    options={["₹", "%"]}
                    width={"60px !important"}
                    height={"40px"}
                    fill="white"
                    renderMenuItem={renderTaxMenuItem}
                  />
                </CustomStack>
              ),
              onBlur: (e) => {
                discount === "" && setDiscount(0);
              },
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="caption" color={"#82878C"}>
            Total
          </Typography>
          <CustomTextField
            smoothCorners="15"
            width="140px"
            height="30px"
            disabled={true}
            borderRadius="2px"
            type="number"
            p="0"
            value={item.totalPrice}
            InputProps={{
              startAdornment: (
                <CustomStack
                  width={"60px"}
                  height={"100%"}
                  alignItems="center"
                  justifyContent="center"
                  smoothCorners="12"
                  sx={{
                    backgroundColor: "#82878C",
                    borderRadius: "2px",
                    marginRight: "10px",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: 600 }}>
                    ₹
                  </Typography>
                </CustomStack>
              ),
            }}
          />
        </Stack>
      </Stack>
      <hr
        style={{
          border: "none",
          height: "1px",
          background: "#82878C",
          background:
            "repeating-linear-gradient(90deg,#82878C,#82878C 6px,transparent 6px,transparent 12px)",
          marginTop: "5px",
        }}
      />
    </Stack>
  );
}
