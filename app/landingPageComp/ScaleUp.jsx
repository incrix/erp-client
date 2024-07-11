import { Stack, Typography } from "@mui/material";
import scaleup from "@/public/landing/scaleup.jpg";

export default function ScaleUp() {
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        direction={{
          xs: "column-reverse",
          md: "row",
          lg: "row",
        }}
        alignItems={"center"}
        spacing={{
          xs: 4,
          md: 8,
          lg: 12,
        }}
        marginTop={{
          xs: 12,
          md: 20,
        }}
        padding={"0 20px"}
      >
        <Stack
          minHeight={{
            xs: 0,
            md: 56,
          }}
          minWidth={"45%"}
        >
          <img
            src={scaleup.src}
            // width={"100%"}
            style={{
              width: "100%",
              maxWidth: "560px",
              // minWidth: "360px",
            }}
          />
        </Stack>
        <Stack spacing={4}>
          <Typography
            variant="h3"
            fontWeight={800}
            fontSize={{
              xs: "30px",
              sm: "30px",
              md: "30px",
              lg: "40px",
            }}
          >
            We help you to scaleup your business.
          </Typography>
          <Typography
            variant="paragraph"
            fontSize={{
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "18px",
            }}
            color={"#58575A"}
            lineHeight={"28px"}
          >
            Introducing Slipze, a seamless solution for businesses of all sizes.
            Effortlessly manage inventory, process transactions, and streamline
            operations. With customizable features and intuitive interfaces,
            it's the ultimate tool for optimizing your business efficiency and
            driving growth. Step to your ecommerce journey effortlessly.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
