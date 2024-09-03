import CustomSelect from "@/app/components/CustomSelect";
import CustomButton from "@/app/components/CustomButton";
import CustomStack from "@/app/components/CustomStack";
import CustomTextField from "@/app/components/CustomTextField";
import Icons from "@/util/icons";
import { MenuItem, Stack, Typography, Autocomplete, Box } from "@mui/material";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProductList } from "@/redux/features/productList";
import getCategory from "@/util/categoryListUtil";

export default function SelectProduct({ invoiceData, onChangeInvoiceValue }) {
  const productList = useSelector((state) => state.productList);
  // const [filteredProductList, setFilteredProductList] = useState(productList);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  function updateCategory(update) {
    getCategory(update).then(() => setCategoryList(getCategory()));
  }

  const updateList = async () => {
    await fetch("/api/product/get-all-products")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatch(
          updateProductList({
            data: data.data,
          })
        );
      });
  };

  useEffect(() => {
    updateCategory(true);
    productList.length == 0 && isLoading && updateList();
    if (productList.length > 0) setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log(filteredProductList);
  // }, [filteredProductList]);

  const renderMenuItem = (option) => {
    return (
      <MenuItem
        onKeyDown={(e) => e.stopPropagation()}
        key={option.catId}
        value={option.name}
      >
        <Typography width={"100%"} color={"#97A1B1"}>
          {option.name}
        </Typography>
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
      marginTop="20px"
    >
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h6"
          color={"#222429"}
          fontSize={"14px"}
          fontWeight={600}
        >
          Add Product
        </Typography>
        <CustomButton
          smoothCorners={10}
          fullWidth={true}
          backgroundColor={"#000E33"}
          fontWeight={"500"}
          height={"40px"}
          width={"150px"}
          startIcon={<QrCodeScannerRoundedIcon />}
          // onClick={() => router.push("/dashboard/invoice/create")}
        >
          Scan code
        </CustomButton>
      </Stack>

      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <CustomSelect
          onChange={(event) => {
            setSelectedCat(event.target.value);
          }}
          value={selectedCat}
          placeholder={"All categories"}
          options={
            getCategory() && [{ name: "All categories" }, ...categoryList]
          }
          width={"150px !important"}
          height={"40px"}
          renderMenuItem={renderMenuItem}
        />
        <Autocomplete
          getOptionLabel={(option) => option.name || option.barcode}
          filterOptions={(options, { inputValue }) =>
            options.filter(
              (item) =>
                item.name.toLowerCase().includes(inputValue) ||
                item.barcode.includes(inputValue)
            )
          }
          options={productList}
          // options={filteredProductList}
          sx={{
            width: "100%",
          }}
          componentsProps={{
            paper: {
              style: {
                borderRadius: "10px",
              },
            },
          }}
          onChange={(e, value) => {
            if (value) {
              const data = {
                name: value.name,
                productId: value.productId,
                price: parseFloat(value.priceWithTax),
                quantity: 1,
                productIndex: productList.indexOf(value),
                unitPrice: parseFloat(value.unitPrice),
                totalPrice: parseFloat(value.priceWithTax),
                discount: {
                  type: value.discount.type,
                  percentage:
                    value.discount.type === "%"
                      ? parseFloat(value.discount.value)
                      : parseFloat(
                          (value.discount.value * 100) / value.priceWithTax
                        ),
                  amount:
                    value.discount.type === "₹"
                      ? parseFloat(value.discount.value)
                      : parseFloat(
                          (value.discount.value * value.priceWithTax) / 100
                        ),
                },
                tax: {
                  cgst: {
                    percentage: parseInt(value.tax.rate) / 2,
                    amount: parseFloat(value.tax.value) / 2,
                  },
                  sgst: {
                    percentage: parseInt(value.tax.rate) / 2,
                    amount: parseFloat(value.tax.value) / 2,
                  },
                  igst: {
                    percentage: parseInt(value.tax.rate),
                    amount: parseFloat(value.tax.value),
                  },
                  cessPercentage: "0",
                  cessValue: 0,
                },
              };
              onChangeInvoiceValue("items", [...invoiceData.items, data]);
            }
          }}
          loading={false}
          loadingText={"Loading..."}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography fontWeight={"500"}>{option.name}</Typography>
                    <Typography
                      fontSize={"10px"}
                      sx={{
                        color: option.stockQty > 0 ? "#31B132" : "#F46F6F",
                      }}
                    >
                      Avl.qty: {option.stockQty} {option.unit}
                    </Typography>
                  </Stack>
                  <Stack alignItems={"end"}>
                    <Typography>₹{option.priceWithTax}</Typography>
                    <Typography fontSize={"10px"}>
                      incl tax {option.tax.rate}%
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            );
          }}
          renderInput={(params) => {
            return (
              <CustomTextField
                {...params}
                // width={"200px"}
                borderWidth="1px"
                // onChange={(e) => {
                //   setSearchQuery(e.target.value);
                //   setFilteredProductList(
                //     productList.filter((product) =>
                //       product.name
                //         .toLowerCase()
                //         .includes(e.target.value.toLowerCase())
                //     )
                //   );
                // }}
                smoothCorners={25}
                height={"40px"}
                placeholder={"Search by name or code"}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    padding: "0 15px",
                    fontSize: "16px",
                  },
                  startAdornment: (
                    <Icons.ProductIcon
                      color="#82878C"
                      width="18px"
                      margin="0 5px 0 0"
                    />
                  ),
                }}
              />
            );
          }}
        />
      </Stack>
    </CustomStack>
  );
}
