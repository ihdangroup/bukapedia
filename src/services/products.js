import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async (arg) => {
  const result = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return result;
});
const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      let oldItem = state.cart.filter((val) => val.id !== action.payload.id);
      let newItem = state.cart.filter((val) => val.id === action.payload.id);
      let newQty = newItem.length ? newItem[0]?.qty + 1 : 1;
      newItem.length
        ? (newItem[0] = { ...action.payload, qty: newQty })
        : (newItem = [{ ...action.payload, qty: newQty }]);
      oldItem.push(newItem[0]);
      state.cart = oldItem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export const { addToCart } = products.actions;
export default products.reducer;
