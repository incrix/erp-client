import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    updateProductList: (state, action) => {
      state.length = 0;
      state.push(...action.payload.data);
    },
    emptyProductList: (state) => {
      state.length = 0;
    },
  },
});

export const { updateProductList, emptyProductList } = productListSlice.actions;
export default productListSlice.reducer;
