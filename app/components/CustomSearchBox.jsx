import { Stack, InputAdornment } from "@mui/material";
import CustomeTextField from "./CustomeTextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useMemo, useEffect } from "react";

export default function CustomSearchBox({ options, setUnitListFiltered }) {
  const [searchText, setSearchText] = useState("");
  const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  // const displayedOptions = useMemo(
  //   () =>{
  //     options.filter((option) => containsText(option.name, searchText))
  //     setUnitListFiltered(options)
  //   },
  //   [searchText]
  // );
  useEffect(() => {
    setUnitListFiltered(options.filter((option) => containsText(option.name, searchText)))
    // setUnitListFiltered(displayedOptions);
  }, [searchText]);
  return (
    <CustomeTextField
      size="small"
      autoFocus={true}
      placeholder="Type to search..."
      fullWidth
      smoothCorners={12}
      height="40px"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setSearchText(e.target.value)}
      // onChange={(e) => {
      //   options.filter((option) => containsText(option.name, e.target.value));
      //   setUnitListFiltered(options.filter((option) => containsText(option.name, e.target.value)));
      //   console.log(options);
      // }}
      onKeyDown={(e) => {
        if (e.key !== "Escape") {
          e.stopPropagation();
        }
      }}
    />
  );
}
