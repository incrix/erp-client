import { createSlice } from "@reduxjs/toolkit";

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState: [],
  reducers: {
    updateCategoryList: (state, action) => {
      state.length = 0;
      state.push(...action.payload.data);
    },
    emptyCategoryList: (state) => {
      state.length = 0;
    },
  },
});

export const { updateCategoryList, emptyCategoryList } =
  categoryListSlice.actions;
export default categoryListSlice.reducer;
