import { Button, Stack, Typography } from "@mui/material";
import CustomStack from "@/app/components/CustomStack";
import CustomButton from "@/app/components/CustomButton";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Avatar from "@/util/avatar";
import { useState } from "react";

export default function AdditionalInfoForm({
  setUpBusinessDetails,
  businessDetails,
}) {
  return (
    <Stack width={"100%"} textAlign={"left"} gap={4}>
      <LogoUpload
        setUpBusinessDetails={setUpBusinessDetails}
        businessDetails={businessDetails}
      />
      <SelectAvatar
        setUpBusinessDetails={setUpBusinessDetails}
        businessDetails={businessDetails}
      />
    </Stack>
  );
}

function SelectAvatar({ setUpBusinessDetails, businessDetails }) {
  const [isMale, setIsMale] = useState(businessDetails.gender == 'male' ? true : false);
  const [selectedAvatar, setSelectedAvatar] = useState(businessDetails.avatar == '' ? null : businessDetails.avatar);
  const activeColor = "#0080FF";
  const inactiveColor = "#999999";
  const maleCharList = ["m1", "m2", "m3", "m4"];
  const femaleCharList = ["f1", "f2", "f3", "f4"];
  const handleMale = () => {
    setIsMale(true);
    setUpBusinessDetails((prevState) => ({
      ...prevState,
      gender: "male",
    }));
    setUpBusinessDetails((prevState) => ({
      ...prevState,
      avatar: "",
    }));
    setSelectedAvatar(null);
  };
  const handleFemale = () => {
    setIsMale(false);
    setUpBusinessDetails((prevState) => ({
      ...prevState,
      gender: "female",
    }));
    setUpBusinessDetails((prevState) => ({
      ...prevState,
      avatar: "",
    }));
    setSelectedAvatar(null);
  };
  const handleAvatarClick = (char) => {
    setUpBusinessDetails((prevState) => ({
      ...prevState,
      avatar: char,
    }));
    setSelectedAvatar(char);
  };
  return (
    <Stack gap={2} width={"100%"}>
      <Typography variant="h6" fontSize={"16px"} fontWeight={"600"}>
        Select avatar for your profile
      </Typography>
      <Stack gap={1} direction={"row"}>
        <CustomButton
          variant="outlined"
          height={"40px"}
          width={"100%"}
          borderRadius={"10px 0 0 10px"}
          border={"2px solid"}
          borderColor={isMale ? activeColor : inactiveColor}
          textColor={isMale ? activeColor : inactiveColor}
          onClick={handleMale}
        >
          <MaleIcon />
        </CustomButton>
        <CustomButton
          variant="outlined"
          height={"40px"}
          width={"100%"}
          borderRadius={"0 10px 10px 0"}
          border={"2px solid"}
          borderColor={!isMale ? activeColor : inactiveColor}
          textColor={!isMale ? activeColor : inactiveColor}
          onClick={handleFemale}
        >
          <FemaleIcon />
        </CustomButton>
      </Stack>
      <Stack
        gap={1}
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        {isMale
          ? maleCharList.map((char) => (
              <Button
                onClick={() => handleAvatarClick(char)}
                sx={{
                  borderRadius: "50%",
                  borderColor:
                    char == selectedAvatar ? activeColor : "transparent",
                  borderStyle: "solid",
                  borderWidth: "3px",
                  p: 0,
                }}
              >
                <Avatar key={char} character={char} />
              </Button>
            ))
          : femaleCharList.map((char) => (
              <Button
                onClick={() => handleAvatarClick(char)}
                sx={{
                  borderRadius: "50%",
                  borderColor:
                    char == selectedAvatar ? activeColor : "transparent",
                  borderStyle: "solid",
                  borderWidth: "3px",
                  p: 0,
                }}
              >
                <Avatar
                  onClick={() => console.log(char)}
                  key={char}
                  character={char}
                />
              </Button>
            ))}
      </Stack>
    </Stack>
  );
}

function LogoUpload() {
  return (
    <Stack gap={2}>
      <Typography variant="h6" fontSize={"16px"} fontWeight={"600"}>
        Organization logo
      </Typography>
      <Stack direction={"row"} gap={2}>
        <ImgUpload />
        <Typography
          variant="body1"
          fontSize={"12px"}
          color={"#82878C"}
          maxWidth={"105px"}
        >
          Logo must be PNG or JPEG, recommended 720 px by 720 px or 1:1 aspect
          ratio.
        </Typography>
      </Stack>
    </Stack>
  );
}

function ImgUpload() {
  return (
    <Stack>
      <label
        for="upload-photo"
        style={{
          cursor: "pointer",
        }}
      >
        <CustomStack
          alignItems={"center"}
          justifyContent={"center"}
          smoothCorners={"12"}
          borderRadius={"10px"}
          width="120px"
          height="100px"
          border={"3px solid #82878C"}
        >
          <AddPhotoAlternateRoundedIcon
            sx={{
              color: "#82878C",
              fontSize: "40px",
            }}
          />
        </CustomStack>
      </label>
      <input
        type="file"
        id="upload-photo"
        style={{
          display: "none",
        }}
      />
    </Stack>
  );
}
