import { createSlice } from "@reduxjs/toolkit";

const invoiceListSlice = createSlice({
  name: "invoiceList",
  initialState: [],
  reducers: {
    updateInvoiceList: (state, action) => {
      state.length = 0;
      state.push(...action.payload.data);
    },
    emptyInvoiceList: (state) => {
      state.length = 0;
    },
  },
});

export const { updateInvoiceList, emptyInvoiceList } = invoiceListSlice.actions;
export default invoiceListSlice.reducer;
