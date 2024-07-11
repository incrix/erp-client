import { Stack, Typography, Divider } from "@mui/material";

export default function Features({ featuresList }) {
  return (
    <Stack id="feature" alignItems={"center"}>
      <Stack
        marginTop={"200px"}
        gap={10}
        width={"100%"}
        maxWidth={"1400px"}
        padding={"0 20px"}
      >
        {featuresList.map((feature) => (
          <>
            <Stack
              direction={{
                md: "column",
                lg: "row",
              }}
              width={"100%"}
              gap={4}
              justifyContent={"space-between"}
            >
              <Stack
                gap={4}
                maxWidth={{
                  sm: "100%",
                  md: "80%",
                  lg: "50%",
                }}
              >
                <Typography
                  variant="paragraph"
                  fontWeight={800}
                  color={"#0080FF"}
                >
                  {feature.id}
                </Typography>
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
                  {feature.title}
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
                  {feature.description}
                </Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <img
                  src={feature.imgSrc}
                  style={{ maxWidth: "560px", width: "100%" }}
                />
              </Stack>
            </Stack>
            <Divider />
          </>
        ))}
      </Stack>
    </Stack>
  );
}
