import CustomTextField from "@/app/components/CustomTextField";
import { Stack } from "@mui/material";

export default function AddressForm({setUpBusinessDetails,businessDetails}) {
    return(
        <Stack gap={2}>
            <CustomTextField placeholder="Organization address line 1" 
            value={businessDetails.orgAddress_1 == '' ? null : businessDetails.orgAddress_1}
            onChange={(e) => {
                setUpBusinessDetails(prevState => ({
                  ...prevState, 
                  orgAddress_1: e.target.value 
              }));
              }}
            />
            <CustomTextField placeholder="Organization address line 2" 
               value={businessDetails.orgAddress_2 == '' ? null : businessDetails.orgAddress_2}
             onChange={(e) => {
                setUpBusinessDetails(prevState => ({
                  ...prevState, // copy the previous state
                  orgAddress_2: e.target.value // update the age field
              }));
              }}
            />
            <CustomTextField placeholder="Enter city" 
               value={businessDetails.city == '' ? null : businessDetails.city}
             onChange={(e) => {
                setUpBusinessDetails(prevState => ({
                  ...prevState, // copy the previous state
                  city: e.target.value // update the age field
              }));
              }}
            />
            <CustomTextField placeholder="Enter State"  
               value={businessDetails.state == '' ? null : businessDetails.state}
            onChange={(e) => {
                setUpBusinessDetails(prevState => ({
                  ...prevState, // copy the previous state
                  state: e.target.value // update the age field
              }));
              }}/>
            <CustomTextField placeholder="Enter zip code"
               value={businessDetails.pincode == '' ? null : businessDetails.pincode}
             onChange={(e) => {
                setUpBusinessDetails(prevState => ({
                  ...prevState, // copy the previous state
                  pincode: e.target.value // update the age field
              }));
              }}
            />
        </Stack>
    )
}