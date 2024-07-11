"use client";
import { Stack, Stepper, Step, StepLabel } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import incrixLogo from "@/public/images/incrix-logo.png";
import CustomStack from "@/app/components/CustomStack";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from 'next/navigation'
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import BusinessInfoForm from "./BusinessInfoForm";
import AddressForm from "./AddressForm";
import AdditionalInfoForm from "./AdditionalInfoForm";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0080FF",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0080FF",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#0080FF",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#0080FF",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {String(props.icon)}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function SetupForm() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const [businessDetails, setUpBusinessDetails] = useState({
    orgName: "",
    industryName: "",
    orgPhone: "",
    orgEmail: "",
    orgAddress: "",
    orgGST: "",
    orgAddress_1: "",
    orgAddress_2: "",
    city: "",
    state: "",
    pincode: "",
    orgLogo: "",
    avatar: "",
    gender: "male",
  });
  const steps = ["Business info", "Address", "Additional info"];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const checkTheBusinessState = (prop) => {
    if (
      prop.orgName !== "" &&
      prop.industryName !== "" &&
      prop.orgPhone !== "" &&
      prop.orgEmail !== ""
    ) return false
    else return true;
  };

  const checkTheAddress = (prop) =>{
    if (
      prop.orgAddress_1 !== "" &&
      prop.orgAddress_2 !== "" &&
      prop.city !== "" &&
      prop.state !== "" && prop.pincode !== ""
    ) return false
    else return true;
  }
  const checkTheAdditionalInfo = (prop) => {
    if (prop.avatar!== "") return false
    else return true;
  }
  const handleSummitDetails = () =>{
    fetch('/api/user/create-profile',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(businessDetails)
    })
    .then(res => res.json())
    .then((data) =>{
      if(data.status == "success") return router.push('/dashboard')
    })
  }
  return (
    <CustomStack
      smoothCorners={"26"}
      padding={{
        xs: "40px 20px",
        sm: "40px 60px",
        md: "40px 60px",
        lg: "40px 60px",
        xl: "40px 60px",
      }}
      margin={{
        xs: "20px",
        sm: "20px",
        md: "0",
        lg: "0",
        xl: "0",
      }}
      background="white"
      alignItems={"center"}
      gap={2}
      width={{
        xs: "95%",
        sm: "80%",
        md: "500px",
        lg: "500px",
        xl: "500px",
      }}
      maxWidth="500px"
      height={{
        xs: "700px",
        sm: "700px",
        md: "700px",
        lg: "700px",
        xl: "700px",
      }}
    >
      <img
        src={incrixLogo.src}
        style={{
          width: "150px",
        }}
        alt="incrix logo"
      />
      <Stepper
        sx={{
          width: "100%",
          marginTop: "20px",
        }}
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stack width={"100%"}>
        {activeStep == 0 && <BusinessInfoForm  setUpBusinessDetails={setUpBusinessDetails} businessDetails={businessDetails}  />}
        {activeStep == 1 && <AddressForm setUpBusinessDetails={setUpBusinessDetails} businessDetails={businessDetails}  />}
        {activeStep == 2 && <AdditionalInfoForm setUpBusinessDetails={setUpBusinessDetails} businessDetails={businessDetails}  />}
      </Stack>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={"auto"}
      >
        {activeStep != 0 && (
          <CustomButton
            variant="outlined"
            border={"2px solid #82878C"}
            textColor={"#82878C"}
            smoothCorners="6"
            onClick={handleBack}
          >
            Back
          </CustomButton>
        )}
        {activeStep != 2 && (
          <CustomButton
            onClick={handleNext}
            smoothCorners="6"
            backgroundColor={"#0080FF"}
            margin={"0 0 0 auto"}
            disabled={activeStep == 0 ? checkTheBusinessState(businessDetails) : activeStep == 1 ? checkTheAddress(businessDetails) : null}
          >
            Next
          </CustomButton>
        )}
        {activeStep == 2 && (
          <CustomButton
          disabled={checkTheAdditionalInfo(businessDetails)}
            smoothCorners="6"
            backgroundColor={"#0080FF"}
            margin={"0 0 0 auto"}
            onClick={handleSummitDetails}
          >
            Finish
          </CustomButton>
        )}
      </Stack>
    </CustomStack>
  );
}
