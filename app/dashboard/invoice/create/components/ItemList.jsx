import CustomeStack from "@/app/components/CustomeStack";
import { IconButton, MenuItem, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomSelect from "@/app/components/CustomSelect";

export default function ItemList() {
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
            25
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
          <Stack>
            <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
              <Stack direction={"row"} gap={1}>
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
                  <CustomeTextField
                    smoothCorners="10"
                    width="60px"
                    height="30px"
                    borderRadius="2px"
                    type="number"
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
                <IconButton sx={{ "&:hover": { backgroundColor: "#FAF0F0" } }}>
                  <DeleteIcon sx={{ color: "#F46F6F", fontSize: 18 }} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack flexWrap={"wrap"} direction={"row"} gap={1}>
              <Stack>
                <Typography variant="caption" color={"#82878C"}>
                  Unit price
                </Typography>
                <CustomeTextField
                  smoothCorners="15"
                  height="30px"
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
              <Stack>
                <Typography variant="caption" color={"#82878C"}>
                  Price with tax
                </Typography>
                <CustomeTextField
                  smoothCorners="15"
                  height="30px"
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
              <Stack>
                <Typography variant="caption" color={"#82878C"}>
                  Discount
                </Typography>
                <CustomeTextField
                  smoothCorners="15"
                  width="140px"
                  height="30px"
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
              <Stack>
                <Typography variant="caption" color={"#82878C"}>
                  Total
                </Typography>
                <CustomeTextField
                  smoothCorners="15"
                  width="140px"
                  height="30px"
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
                marginTop: "5px",
              }}
            />
          </Stack>
        </Stack>
      </CustomeStack>
    );
  }