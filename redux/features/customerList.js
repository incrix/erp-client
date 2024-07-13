import { createSlice } from "@reduxjs/toolkit";

const customerListSlice = createSlice({
  name: "customerList",
  initialState: [],
  reducers: {
    updateCustomerList: (state, action) => {
      state.length = 0;
      state.push(...action.payload.data);
    },
    emptyCustomerList: (state) => {
      state.length = 0;
    },
  },
});

export const { updateCustomerList, emptyCustomerList } =
  customerListSlice.actions;
export default customerListSlice.reducer;
