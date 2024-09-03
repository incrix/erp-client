import { Stack, InputAdornment, TextField } from "@mui/material";
import CustomTextField from "./CustomTextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useMemo, useEffect } from "react";

export default function CustomSearchBox({
  options,
  setUnitListFiltered,
  isNumEnabled = false,
  textPram,
  numParam,
}) {
  const [searchText, setSearchText] = useState("");
  const containsText = (text, searchText) =>
    text && text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  // const displayedOptions = useMemo(
  //   () => options.filter((option) => containsText(option.name, searchText)),
  //   [searchText]
  // );
  useEffect(() => {
    console.log(
      options.filter((option) =>
        containsText(
          isNumEnabled
            ? isNaN(searchText)
              ? option[textPram]
              : option[numParam]
            : option[textPram],
          searchText
        )
      )
    );
    // console.log(
    //   options.filter((option) =>
    //     containsText(
    //       isNaN(searchText) ? option[textPram] : option[numParam],
    //       searchText
    //     )
    //   )
    // );
    if (options) {
      setUnitListFiltered(
        options.filter((option) =>
          containsText(
            isNumEnabled
              ? isNaN(searchText)
                ? option[textPram]
                : option[numParam]
              : option[textPram],
            searchText
          )
        )
      );
    }
  }, [searchText]);

  return (
    <CustomTextField
      size="small"
      autoFocus
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
      onKeyDown={(e) => {
        if (e.key !== "Escape") {
          e.stopPropagation();
        }
      }}
    />
  );
}
