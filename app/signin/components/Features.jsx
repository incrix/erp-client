import { Stack } from "@mui/material";
import CustomStack from "@/app/components/CustomStack";
import signUpImg from "@/public/images/signup-img-1.png";

export default function Features() {
  return (
    <aside
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomStack
        background="linear-gradient(180deg, #2164BE 20%, #009BFF 90%)"
        smoothCorners={"40"}
        width="100%"
        // height="100%"
        borderRadius={"20px"}
        padding={"60px 40px"}
      >
        <Stack>
          <Stack gap={1}>
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
                fontWeight: "700",
              }}
            >
              Cloud-based Flexibility:
            </h3>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "20px",
                fontWeight: "300",
              }}
            >
              Access your data anytime, anywhere.
            </p>
          </Stack>
          <Stack
            padding={"20px"}
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={signUpImg.src}
              alt=""
              style={{
                // width: "80%",
                height: "600px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Stack>
        </Stack>
      </CustomStack>
    </aside>
  );
}
