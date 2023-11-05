import { configureStore } from "@reduxjs/toolkit";
import { authSlice, productSlice } from "../features";

const store = configureStore({
  reducer: {
    authSlice,
    productSlice,
  },
});
export default store;
