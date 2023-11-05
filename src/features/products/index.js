import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  carts: [],
  products: [],
  loading: true,
};
export const getProducts = createAsyncThunk("getProducts", async (params) => {
  const result =
    params === "all"
      ? await fetch(`https://fakestoreapi.com/products`)
      : await fetch(`https://fakestoreapi.com/products${params}`);
  return result.json();
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const carts =
        state.carts.length > 0 ? JSON.parse(state.carts) : state.carts;
      let payload = JSON.parse(action.payload);
      let oldItem = carts.filter((cart) => cart.id !== payload.id);
      let newItem = carts.filter((cart) => cart.id === payload.id);
      let newQty;
      let newTotal;
      if (newItem.length > 0) {
        newQty = newItem[0].qty + 1;
        newTotal = newItem[0].newTotal + newItem[0].price;
      } else {
        newQty = 1;
        newTotal = payload.price;
      }
      newItem.length
        ? (newItem[0] = { ...payload, qty: newQty, newTotal })
        : (newItem = [{ ...payload, qty: newQty, newTotal }]);
      oldItem.push(newItem[0]);
      state.carts = JSON.stringify(oldItem);
      toast("🦄 Success Add to Cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    editQuantity: (state, action) => {
      const carts =
        state.carts.length > 0 ? JSON.parse(state.carts) : state.carts;
      let payload = JSON.parse(action.payload);
      const { cart, index, operator } = payload;
      let oldItem = carts.filter((item) => item.id !== cart.id);
      let newItem = carts.filter((item) => item.id === cart.id);
      let newQty;
      let newTotal;
      if (operator === "plus") {
        newQty = newItem[0].qty + 1;
        newTotal = newItem[0].newTotal + newItem[0].price;
      } else {
        if (newItem[0].qty == 1) {
          return;
        } else {
          newQty = newItem[0].qty - 1;
          newTotal = newItem[0].newTotal - newItem[0].price;
        }
      }

      newItem.length
        ? (newItem[0] = { ...cart, qty: newQty, newTotal })
        : (newItem = [{ ...cart, qty: newQty, newTotal }]);
      oldItem.splice(index, 0, newItem[0]);
      state.carts = JSON.stringify(oldItem);
    },
    buy: (state) => {
      state.carts = [];
      toast("Terima Kasih telah berbelanja disini", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});
export const { buy, addToCart, editQuantity } = productSlice.actions;
export default productSlice.reducer;
