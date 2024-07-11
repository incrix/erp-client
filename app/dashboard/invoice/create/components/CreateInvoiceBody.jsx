import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomStack from "@/app/components/CustomStack";
import CustomButton from "@/app/components/CustomButton";
import useWindowDimensions from "@/util/useWindowDimensions";
import SelectCustomer from "./SelectCustomer";
import SelectProduct from "./SelectProduct";
import AdditionalCharges from "./AdditionalCharges";
import AddPayment from "./AddPayment";
import ItemList from "./ItemList";
import InvoiceSummary from "./InvoiceSummary";

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
          <CustomButton
            smoothCorners={20}
            fullWidth={true}
            backgroundColor={"#000E33"}
            fontWeight={"500"}
            height={"40px"}
            margin="20px 0 0 0"
            // onClick={() => router.push("/dashboard/invoice/create")}
          >
            Complete
          </CustomButton>
        </Grid>
      </Grid>
    </Stack>
  );
}
