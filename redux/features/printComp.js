import { createSlice } from "@reduxjs/toolkit";

const printComp = createSlice({
  name: "printComp",
  initialState: {
    isOpen: false,
    title: "",
    invoice: {},
  },
  reducers: {
    setPrintComp: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
      state.invoice = action.payload.invoice;
    },
    setInitial: (state) => {
      state.isOpen = false;
      state.title = "";
      state.invoice = {};
    },
  },
});
export const { setPrintComp, setInitial } = printComp.actions;
export default printComp.reducer;
