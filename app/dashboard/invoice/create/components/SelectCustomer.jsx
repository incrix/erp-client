import CustomSelect from "@/app/components/CustomSelect";
import CustomeStack from "@/app/components/CustomeStack";
import { ListSubheader, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CustomSearchBox from "@/app/components/CustomSearchBox";
import CustomeButton from "@/app/components/CustomeButton";

export default function SelectCustomer() {
  const [value, setValue] = useState("");
  return (
    <CustomeStack
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
          onChange={(event) => {}}
          value={value}
          placeholder={"Customer"}
          options={[]}
          width={"300px"}
          height={"40px"}
          // renderMenuItem={renderTaxMenuItem}
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
                // options={unitList}
                // setUnitListFiltered={setUnitListFiltered}
                />
                <CustomeButton
                  width="100%"
                  smoothCorners="15"
                  backgroundColor="#97A1B1"
                >
                  Add Customer
                </CustomeButton>
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
          value={new Date().toLocaleDateString("en-CA")}
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </Stack>
    </CustomeStack>
  );
}
