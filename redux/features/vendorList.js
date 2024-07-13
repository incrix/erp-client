import { createSlice } from "@reduxjs/toolkit";

const vendorListSlice = createSlice({
  name: "vendorList",
  initialState: [],
  reducers: {
    updateVendorList: (state, action) => {
      state.length = 0;
      state.push(...action.payload.data);
    },
    emptyVendorList: (state) => {
      state.length = 0;
    },
  },
});

export const { updateVendorList, emptyVendorList } = vendorListSlice.actions;
export default vendorListSlice.reducer;
