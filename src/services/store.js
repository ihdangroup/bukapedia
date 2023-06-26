import { configureStore } from "@reduxjs/toolkit";
import ProductReducers from "./products";
export default configureStore({
  reducer: {
    products: ProductReducers,
  },
});
