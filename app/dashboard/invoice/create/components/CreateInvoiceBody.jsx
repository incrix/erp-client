import {
  ListSubheader,
  Stack,
  Typography,
  MenuItem,
  Tooltip,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomeStack from "@/app/components/CustomeStack";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomeButton from "@/app/components/CustomeButton";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CustomSelect from "@/app/components/CustomSelect";
import { useState } from "react";
import CustomSearchBox from "@/app/components/CustomSearchBox";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Icons from "@/util/icons";
import CustomeSwitch from "@/app/components/CustomeSwitch";
import useWindowDimensions from "@/util/useWindowDimensions";

export default function CreateInvoiceBody() {
  const { height, width } = useWindowDimensions();
  return (
    <Stack width={"100%"} height={"100%"}>
      <Grid
        container
        spacing={2}
        height={
          height > 800
            ? `${height * 0.73}px`
            : height > 700
            ? `${height * 0.69}px`
            : height > 600
            ? `${height * 0.65}px`
            : `${height * 0.6}px`
        }
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
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
        <Grid xl={5}>
          <SelectCustomer />
          <SelectProduct />
          <AdditionalCharges />
          <AddPayment />
        </Grid>
        <Grid xl={7}>
          <ItemList />
          <InvoiceSummary />
          <CustomeButton
            smoothCorners={20}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            margin="20px 0 0 0"
            // onClick={() => router.push("/dashboard/invoice/create")}
          >
            Complete
          </CustomeButton>
        </Grid>
      </Grid>
    </Stack>
  );
}

function InvoiceSummary() {
  return (
    <CustomeStack
      gap={1}
      justifyContent={"center"}
      width="100%"
      smoothCorners="25"
      background="#F2F8FF"
      padding={"20px"}
      borderRadius="20px"
      marginTop="20px"
      sx={{
        position: "relative",
        "&:after": {
          content: "''",
          position: "absolute",
          bottom: "60px",
          right: "-10px",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          background: "white",
        },
        "&:before": {
          content: "''",
          position: "absolute",
          bottom: "60px",
          left: "-10px",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          background: "white",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#82878C"}
      >
        <Typography>Subtotal</Typography>
        <Typography>₹{5110}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#82878C"}
      >
        <Typography>Total Discount</Typography>
        <Typography>₹{511}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#82878C"}
      >
        <Typography>Shipping Charges</Typography>
        <Typography>₹{100}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#82878C"}
      >
        <Typography>Packaging Charges</Typography>
        <Typography>₹{10}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#82878C"}
      >
        <Typography>Total Taxes</Typography>
        <Typography>₹{522}</Typography>
      </Stack>
      <hr
        style={{
          border: "none",
          height: "1px",
          background: "#82878C",
          background:
            "repeating-linear-gradient(90deg,#82878C,#82878C 6px,transparent 6px,transparent 12px)",
          margin: "10px 0",
        }}
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"black"}
      >
        <Typography fontSize={20} fontWeight={600}>
          Total
        </Typography>
        <Typography fontSize={20} fontWeight={600}>
          ₹{5110}
        </Typography>
      </Stack>
    </CustomeStack>
  );
}

function ItemList() {
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
    <CustomeStack
      gap={1}
      justifyContent={"center"}
      width="100%"
      smoothCorners="25"
      background="#F8F8F8"
      padding={"20px"}
      borderRadius="20px"
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography variant="h3" fontSize={"16px"} fontWeight={600}>
          Items
        </Typography>
        <Typography>25</Typography>
      </Stack>

      <Stack
        gap={1}
        height={"410px"}
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
        <Stack gap={1}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h6"
                color={"#82878C"}
                fontSize={"14px"}
                fontWeight={600}
              >
                #1
              </Typography>
              <Typography
                variant="h6"
                color={"#222429"}
                fontSize={"14px"}
                fontWeight={600}
              >
                100W power
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <CustomeTextField
                  smoothCorners="10"
                  width="80px"
                  height="40px"
                  borderRadius="2px"
                  type="number"
                />
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                <DeleteIcon sx={{ color: "#F46F6F" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Unit price
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Price with tax
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Discount
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                        onChange={(event) => {}}
                        color="white"
                        value={"%"}
                        border={"none"}
                        borderRadius="5px"
                        placeholder={"₹"}
                        options={["₹", "%"]}
                        width={"60px !important"}
                        height={"40px"}
                        fill="white"
                        renderMenuItem={renderTaxMenuItem}
                      />
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Total
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
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
              // marginTop: "5px",
            }}
          />
        </Stack>
        <Stack gap={1}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h6"
                color={"#82878C"}
                fontSize={"14px"}
                fontWeight={600}
              >
                #1
              </Typography>
              <Typography
                variant="h6"
                color={"#222429"}
                fontSize={"14px"}
                fontWeight={600}
              >
                100W power
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <CustomeTextField
                  smoothCorners="10"
                  width="80px"
                  height="40px"
                  borderRadius="2px"
                  type="number"
                />
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                <DeleteIcon sx={{ color: "#F46F6F" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Unit price
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Price with tax
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Discount
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                        onChange={(event) => {}}
                        color="white"
                        value={"%"}
                        border={"none"}
                        borderRadius="5px"
                        placeholder={"₹"}
                        options={["₹", "%"]}
                        width={"60px !important"}
                        height={"40px"}
                        fill="white"
                        renderMenuItem={renderTaxMenuItem}
                      />
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Total
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
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
              // marginTop: "5px",
            }}
          />
        </Stack>
        <Stack gap={1}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h6"
                color={"#82878C"}
                fontSize={"14px"}
                fontWeight={600}
              >
                #1
              </Typography>
              <Typography
                variant="h6"
                color={"#222429"}
                fontSize={"14px"}
                fontWeight={600}
              >
                100W power
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <CustomeTextField
                  smoothCorners="10"
                  width="80px"
                  height="40px"
                  borderRadius="2px"
                  type="number"
                />
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                <DeleteIcon sx={{ color: "#F46F6F" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Unit price
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Price with tax
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Discount
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                        onChange={(event) => {}}
                        color="white"
                        value={"%"}
                        border={"none"}
                        borderRadius="5px"
                        placeholder={"₹"}
                        options={["₹", "%"]}
                        width={"60px !important"}
                        height={"40px"}
                        fill="white"
                        renderMenuItem={renderTaxMenuItem}
                      />
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Total
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
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
              // marginTop: "5px",
            }}
          />
        </Stack>
        <Stack gap={1}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h6"
                color={"#82878C"}
                fontSize={"14px"}
                fontWeight={600}
              >
                #1
              </Typography>
              <Typography
                variant="h6"
                color={"#222429"}
                fontSize={"14px"}
                fontWeight={600}
              >
                100W power
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <CustomeTextField
                  smoothCorners="10"
                  width="80px"
                  height="40px"
                  borderRadius="2px"
                  type="number"
                />
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                <DeleteIcon sx={{ color: "#F46F6F" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Unit price
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Price with tax
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Discount
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                        onChange={(event) => {}}
                        color="white"
                        value={"%"}
                        border={"none"}
                        borderRadius="5px"
                        placeholder={"₹"}
                        options={["₹", "%"]}
                        width={"60px !important"}
                        height={"40px"}
                        fill="white"
                        renderMenuItem={renderTaxMenuItem}
                      />
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Total
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
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
              // marginTop: "5px",
            }}
          />
        </Stack>
        <Stack gap={1}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <Typography
                variant="h6"
                color={"#82878C"}
                fontSize={"14px"}
                fontWeight={600}
              >
                #1
              </Typography>
              <Typography
                variant="h6"
                color={"#222429"}
                fontSize={"14px"}
                fontWeight={600}
              >
                100W power
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <CustomeTextField
                  smoothCorners="10"
                  width="80px"
                  height="40px"
                  borderRadius="2px"
                  type="number"
                />
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#82878C",
                    color: "white",
                    "&:hover": { backgroundColor: "#82878C" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                <DeleteIcon sx={{ color: "#F46F6F" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Unit price
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Price with tax
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                height="40px"
                width="140px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Discount
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                        onChange={(event) => {}}
                        color="white"
                        value={"%"}
                        border={"none"}
                        borderRadius="5px"
                        placeholder={"₹"}
                        options={["₹", "%"]}
                        width={"60px !important"}
                        height={"40px"}
                        fill="white"
                        renderMenuItem={renderTaxMenuItem}
                      />
                    </CustomeStack>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Typography variant="caption" color={"#82878C"}>
                Total
              </Typography>
              <CustomeTextField
                smoothCorners="15"
                width="140px"
                height="40px"
                borderRadius="2px"
                type="number"
                p="0"
                InputProps={{
                  startAdornment: (
                    <CustomeStack
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
                    </CustomeStack>
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
              // marginTop: "5px",
            }}
          />
        </Stack>
      </Stack>
    </CustomeStack>
  );
}

function SelectCustomer() {
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
function SelectProduct() {
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

function AdditionalCharges() {
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

function AddPayment() {
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
        <CustomeTextField
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
        <CustomeTextField
          height={"40px"}
          smoothCorners={15}
          fullWidth
          placeholder="Notes , UTR Number, etc."
          borderWidth="1px"
          type="text"
        />
      </Stack>
    </CustomeStack>
  );
}
