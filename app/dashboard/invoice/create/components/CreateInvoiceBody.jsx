import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomeTextField from "@/app/components/CustomeTextField";
import CustomeButton from "@/app/components/CustomeButton";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function CreateInvoiceBody() {
  return (
    <Stack width={"100%"} height={"100%"}>
      <Grid container spacing={2}>
        <Grid xl={7}>
          <CustomeTextField
            width={"300px"}
            height={"40px"}
            smoothCorners={15}
            placeholder={"Customer"}
            // label={"Product Name"}
            borderWidth="1px"
            InputProps={{
              startAdornment: (
                <PersonRoundedIcon
                  style={{
                    color: "#82878C",
                    marginRight: "5px",
                  }}
                  fontSize="12px"
                />
              ),
            }}
          />
        </Grid>
        <Grid xl={5}></Grid>
      </Grid>
    </Stack>
  );
}
