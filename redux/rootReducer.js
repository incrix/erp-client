import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import productListReducer from "./features/productList";

const rootReducer = combineReducers({
  alert: alertReducer,
  productList: productListReducer,
});
export default rootReducer;
