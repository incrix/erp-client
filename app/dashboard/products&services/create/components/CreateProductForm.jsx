"use client";
import { Stack, Typography, MenuItem, ListSubheader } from "@mui/material";
import CustomeTextField from "@/app/components/CustomeTextField";
import { useState, useEffect } from "react";
import CustomSelect from "@/app/components/CustomSelect";
import CustomDuoButtonGroup from "@/app/components/CustomDuoButtonGroup";
import CustomSearchBox from "@/app/components/CustomSearchBox";
import CustomeButton from "@/app/components/CustomeButton";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import Icons from "@/util/icons";

export default function CreateProductForm({
  newProduct,
  onChangeProductValue,
}) {
  const [unitListFiltered, setUnitListFiltered] = useState(unitList);

  const renderUnitMenuItem = (option) => {
    return (
      <MenuItem
        onKeyDown={(e) => e.stopPropagation()}
        key={option.id}
        value={option.code}
      >
        <Typography fontWeight={600} color={"#97A1B1"}>
          {option.code}
        </Typography>
        <Typography color={"#97A1B1"}>({option.name})</Typography>
      </MenuItem>
    );
  };

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
    <Stack gap={2}>
      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Basic Details
      </Typography>
      <CustomDuoButtonGroup
        options={["Product", "Service"]}
        onClick={(value) => {
          onChangeProductValue("type", value);
        }}
        value={newProduct.type}
      />
      <CustomeTextField
        width={"300px"}
        height={"40px"}
        smoothCorners={15}
        placeholder={"Product Name"}
        // label={"Product Name"}
        borderWidth="1px"
        InputProps={{
          startAdornment: (
            <Icons.ProductIcon
              color="#82878C"
              width="18px"
              margin="0 5px 0 0"
            />
          ),
        }}
        onChange={(e) => {
          onChangeProductValue("name", e.target.value);
        }}
      />
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Selling price"}
          borderWidth="1px"
          type="number"
          onChange={(e) => {
            onChangeProductValue("sellingPrice", e.target.value);
          }}
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
            endAdornment: (
              <CustomSelect
                onChange={(event) => {
                  onChangeProductValue(
                    "sellingPriceWithTax",
                    event.target.value == "Within Tax" ? true : false
                  );
                }}
                value={
                  newProduct.sellingPriceWithTax ? "Within Tax" : "Without Tax"
                }
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
        <CustomSelect
          onChange={(event) => {
            onChangeProductValue("taxRate", event.target.value);
          }}
          value={newProduct.taxRate === 0 ? "" : newProduct.taxRate}
          placeholder={"Tax %"}
          options={taxList}
          width={"300px"}
          height={"40px"}
          renderMenuItem={renderTaxMenuItem}
        />
      </Stack>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Discount"}
          borderWidth="1px"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            onChangeProductValue("discount", {
              value: e.target.value,
              type: newProduct.discount.type,
            });
          }}
          InputProps={{
            endAdornment: (
              <CustomSelect
                onChange={(event) => {
                  console.log(event.target.value);
                  onChangeProductValue("discount", {
                    type: event.target.value,
                    value: newProduct.discount.value,
                  });
                }}
                value={newProduct.discount.type}
                border={"none"}
                placeholder={"%"}
                options={["%", "₹"]}
                width={"100px !important"}
                height={"40px"}
                renderMenuItem={renderTaxMenuItem}
              />
            ),
          }}
        />
        <CustomSelect
          onChange={(event) => {
            onChangeProductValue("unit", event.target.value);
          }}
          value={newProduct.unit}
          placeholder={"Unit"}
          options={unitListFiltered}
          width={"300px"}
          height={"40px"}
          renderMenuItem={renderUnitMenuItem}
          startAdornment={
            <ScaleRoundedIcon
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
              <CustomSearchBox
                options={unitList}
                setUnitListFiltered={setUnitListFiltered}
              />
            </ListSubheader>
          }
        />
      </Stack>

      <Typography variant="h6" fontSize={14} color={"#222429"} fontWeight={600}>
        Additional Details
      </Typography>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"SKU / Barcode"}
          borderWidth="1px"
          onChange={(e) => {
            onChangeProductValue("barcode", e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <QrCodeScannerRoundedIcon
                style={{
                  color: "#82878C",
                  marginRight: "5px",
                }}
                fontSize="12px"
              />
            ),
          }}
          type="number"
        />
        <CustomSelect
          onChange={(event) => {
            onChangeProductValue("categoryId", event.target.value);
          }}
          value={newProduct.categoryId}
          placeholder={"Category"}
          options={[]}
          width={"300px"}
          height={"40px"}
          renderMenuItem={(option) => {
            return option ? (
              <MenuItem>No Category</MenuItem>
            ) : (
              <MenuItem>No Category</MenuItem>
            );
          }}
          startAdornment={
            <CategoryRoundedIcon
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
                  options={unitList}
                  setUnitListFiltered={setUnitListFiltered}
                />
                <CustomeButton
                  width="100%"
                  smoothCorners="15"
                  backgroundColor="#97A1B1"
                >
                  Add Catagory
                </CustomeButton>
              </Stack>
            </ListSubheader>
          }
        />
      </Stack>
      <Stack direction={"row"} gap={2}>
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Buying price"}
          borderWidth="1px"
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
          onChange={(e) => {
            onChangeProductValue("buyingPrice", e.target.value);
          }}
        />
        <CustomeTextField
          width={"300px"}
          height={"40px"}
          smoothCorners={15}
          placeholder={"Stock Quantity (num)"}
          borderWidth="1px"
          InputProps={{
            startAdornment: (
              <InventoryRoundedIcon
                style={{
                  color: "#82878C",
                  marginRight: "5px",
                }}
                fontSize="12px"
              />
            ),
          }}
          onChange={(e) => {
            onChangeProductValue("stock", e.target.value);
          }}
          type="number"
        />
      </Stack>
    </Stack>
  );
}

const taxList = [
  "5",
  "12",
  "0",
  "0.1",
  "7.5",
  "18",
  "28",
  "6",
  "1.5",
  "1",
  "3",
  "0.25",
];

const unitList = [
  {
    code: "OTH",
    id: 34,
    name: "OTHERS",
  },
  {
    code: "PCS",
    id: 18,
    name: "PIECES",
  },
  {
    code: "NOS",
    id: 71,
    name: "NUMBERS",
  },
  {
    code: "KGS",
    id: 66,
    name: "KILOGRAMS",
  },
  {
    code: "UNT",
    id: 32,
    name: "UNITS",
  },
  {
    code: "BOX",
    id: 52,
    name: "BOX",
  },
  {
    code: "LTR",
    id: 37,
    name: "LITRE",
  },
  {
    code: "PAC",
    id: 72,
    name: "PACKS",
  },
  {
    code: "EACH",
    id: 12,
    name: "EACH",
  },
  {
    code: "MTR",
    id: 70,
    name: "METERS",
  },
  {
    code: "SET",
    id: 22,
    name: "SETS",
  },
  {
    code: "SQF",
    id: 23,
    name: "SQUARE FEET",
  },
  {
    code: "POCH",
    id: 5,
    name: "POUCH",
  },
  {
    code: "BTL",
    id: 53,
    name: "BOTTLES",
  },
  {
    code: "BAG",
    id: 47,
    name: "BAGS",
  },
  {
    code: "CASE",
    id: 11,
    name: "CASE",
  },
  {
    code: "LAD",
    id: 1,
    name: "LADI",
  },
  {
    code: "JAR",
    id: 3,
    name: "JARS",
  },
  {
    code: "PET",
    id: 2,
    name: "PETI",
  },
  {
    code: "FT",
    id: 8,
    name: "FEET",
  },
  {
    code: "GMS",
    id: 63,
    name: "GRAMS",
  },
  {
    code: "TBS",
    id: 26,
    name: "TABLETS",
  },
  {
    code: "STRP",
    id: 44,
    name: "STRIPS",
  },
  {
    code: "ROL",
    id: 21,
    name: "ROLLS",
  },
  {
    code: "COIL",
    id: 7,
    name: "COIL",
  },
  {
    code: "DOZ",
    id: 60,
    name: "DOZEN",
  },
  {
    code: "QTL",
    id: 20,
    name: "QUINTAL",
  },
  {
    code: "PRS",
    id: 19,
    name: "PAIRS",
  },
  {
    code: "NONE",
    id: 99,
    name: "NONE",
  },
  {
    code: "BOR",
    id: 6,
    name: "BORA",
  },
  {
    code: "PAIR",
    id: 84,
    name: "PAIR",
  },
  {
    code: "DAY",
    id: 91,
    name: "DAYS",
  },
  {
    code: "MTS",
    id: 38,
    name: "METRIC TON",
  },
  {
    code: "SQM",
    id: 24,
    name: "SQUARE METERS",
  },
  {
    code: "CTN",
    id: 59,
    name: "CARTONS",
  },
  {
    code: "LOT",
    id: 95,
    name: "LOT",
  },
  {
    code: "PLT",
    id: 42,
    name: "PLATES",
  },
  {
    code: "TON",
    id: 29,
    name: "TONNES",
  },
  {
    code: "PERSON",
    id: 94,
    name: "PERSONS",
  },
  {
    code: "MTH",
    id: 88,
    name: "MONTH",
  },
  {
    code: "SHEETS",
    id: 106,
    name: "SHEETS",
  },
  {
    code: "CAN",
    id: 55,
    name: "CANS",
  },
  {
    code: "BDL",
    id: 49,
    name: "BUNDLES",
  },
  {
    code: "COPY",
    id: 100,
    name: "COPY",
  },
  {
    code: "MLT",
    id: 69,
    name: "MILLILITRE",
  },
  {
    code: "IN",
    id: 9,
    name: "INCHES",
  },
  {
    code: "TIN",
    id: 76,
    name: "TIN",
  },
  {
    code: "KIT",
    id: 79,
    name: "KIT",
  },
  {
    code: "PAD",
    id: 17,
    name: "PAD",
  },
  {
    code: "CPS",
    id: 13,
    name: "CAPSULES",
  },
  {
    code: "HRS",
    id: 35,
    name: "HOURS",
  },
  {
    code: "KME",
    id: 68,
    name: "KILOMETRE",
  },
  {
    code: "MLG",
    id: 39,
    name: "MILLIGRAM",
  },
  {
    code: "TUB",
    id: 30,
    name: "TUBES",
  },
  {
    code: "BARREL",
    id: 105,
    name: "BARREL",
  },
  {
    code: "RFT",
    id: 74,
    name: "RUNNING FOOT",
  },
  {
    code: "CBM",
    id: 56,
    name: "CUBIC METER",
  },
  {
    code: "HEGAR",
    id: 4,
    name: "HANGER",
  },
  {
    code: "DRM",
    id: 61,
    name: "DRUM",
  },
  {
    code: "GLS",
    id: 41,
    name: "GLASSES",
  },
  {
    code: "PRT",
    id: 10,
    name: "PORTION",
  },
  {
    code: "RMT",
    id: 81,
    name: "RUNNING METER",
  },
  {
    code: "VIAL",
    id: 46,
    name: "VIALS",
  },
  {
    code: "BCK",
    id: 40,
    name: "BUCKETS",
  },
  {
    code: "YRS",
    id: 87,
    name: "YEARS",
  },
  {
    code: "CFT",
    id: 45,
    name: "CUBIC FOOT",
  },
  {
    code: "MAN-DAY",
    id: 89,
    name: "MAN-DAYS",
  },
  {
    code: "REEL",
    id: 15,
    name: "REEL",
  },
  {
    code: "BUN",
    id: 54,
    name: "BUNCHES",
  },
  {
    code: "PATTA",
    id: 78,
    name: "PATTA",
  },
  {
    code: "AMP",
    id: 83,
    name: "AMPOULE",
  },
  {
    code: "TKT",
    id: 101,
    name: "TICKET",
  },
  {
    code: "CTS",
    id: 43,
    name: "CARATS",
  },
  {
    code: "BLISTER",
    id: 16,
    name: "BLISTER",
  },
  {
    code: "CCM",
    id: 57,
    name: "CUBIC CENTIMETER",
  },
  {
    code: "HOLES",
    id: 107,
    name: "HOLES",
  },
  {
    code: "REAM",
    id: 97,
    name: "REAM",
  },
  {
    code: "BRASS",
    id: 98,
    name: "BRASS",
  },
  {
    code: "PADS",
    id: 14,
    name: "PADS",
  },
  {
    code: "RIM",
    id: 75,
    name: "RIM",
  },
  {
    code: "KW",
    id: 102,
    name: "KILOWATT",
  },
  {
    code: "W",
    id: 103,
    name: "WATT",
  },
  {
    code: "NIGHT",
    id: 90,
    name: "NIGHTS",
  },
  {
    code: "LINES",
    id: 108,
    name: "LINES",
  },
  {
    code: "LGTH",
    id: 109,
    name: "LENGTH",
  },
  {
    code: "TRIP",
    id: 110,
    name: "TRIP",
  },
  {
    code: "LPSM",
    id: 111,
    name: "LUMPSUM",
  },
  {
    code: "WDTH",
    id: 112,
    name: "WIDTH",
  },
  {
    code: "SQCM",
    id: 113,
    name: "SQUARE CENTIMETERS",
  },
  {
    code: "SHFT",
    id: 114,
    name: "SHIFTS",
  },
  {
    code: "AU",
    id: 115,
    name: "ASTRONOMICAL UNIT",
  },
  {
    code: "MINS",
    id: 36,
    name: "MINUTES",
  },
  {
    code: "BAL",
    id: 48,
    name: "BALE",
  },
  {
    code: "GRS",
    id: 64,
    name: "GROSS",
  },
  {
    code: "THD",
    id: 28,
    name: "THOUSANDS",
  },
  {
    code: "SAC",
    id: 96,
    name: "SACHET",
  },
  {
    code: "MM",
    id: 82,
    name: "MILLIMETER",
  },
  {
    code: "KLR",
    id: 67,
    name: "KILOLITER",
  },
  {
    code: "CUFT",
    id: 80,
    name: "CUBIC FEET",
  },
  {
    code: "SEC",
    id: 104,
    name: "SECONDS",
  },
  {
    code: "CMS",
    id: 58,
    name: "CENTIMETER",
  },
  {
    code: "YDS",
    id: 33,
    name: "YARDS",
  },
  {
    code: "SQIN",
    id: 92,
    name: "SQUARE INCHES",
  },
  {
    code: "UGS",
    id: 31,
    name: "US GALLONS",
  },
  {
    code: "BOU",
    id: 51,
    name: "BILLIONS OF UNITS",
  },
  {
    code: "WEEK",
    id: 93,
    name: "WEEKS",
  },
  {
    code: "ANA",
    id: 85,
    name: "AANA",
  },
  {
    code: "TGM",
    id: 27,
    name: "TEN GROSS",
  },
  {
    code: "GGR",
    id: 62,
    name: "GREAT GROSS",
  },
  {
    code: "CHUDI",
    id: 77,
    name: "CHUDI",
  },
  {
    code: "SQY",
    id: 25,
    name: "SQUARE YARDS",
  },
  {
    code: "BKL",
    id: 50,
    name: "BUCKLES",
  },
  {
    code: "CNT",
    id: 73,
    name: "CENTS",
  },
  {
    code: "CFM",
    id: 86,
    name: "CUBIC FEET PER MINUTE",
  },
  {
    code: "GYD",
    id: 65,
    name: "GROSS YARDS",
  },
];
