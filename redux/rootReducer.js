import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import productListReducer from "./features/productList";
import customerList from "./features/customerList";
import vendorList from "./features/vendorList";
import categoryList from "./features/categoryList";
import invoiceList from "./features/invoiceList";
import printComp from "./features/printComp";

const rootReducer = combineReducers({
  alert: alertReducer,
  productList: productListReducer,
  customerList: customerList,
  vendorList: vendorList,
  categoryList: categoryList,
  invoiceList: invoiceList,
  printComp: printComp,
});

export default rootReducer;
