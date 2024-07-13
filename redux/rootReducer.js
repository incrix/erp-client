import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import productListReducer from "./features/productList";
import customerList from "./features/customerList";
import vendorList from "./features/vendorList";

const rootReducer = combineReducers({
  alert: alertReducer,
  productList: productListReducer,
  customerList: customerList,
  vendorList: vendorList
});
export default rootReducer;
