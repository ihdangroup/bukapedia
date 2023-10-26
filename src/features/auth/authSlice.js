import * as React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem("user");
const initialState = {
  user: user ? user : null,
  carts: [],
  products: [],
  loading: true,
  error: null,
};
export const getProducts = createAsyncThunk("getProducts", async (arg) => {
  const result = await fetch("https://fakestoreapi.com/products");
  return result.json();
});
const authSlice = createSlice({
  name: "auth",
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
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email !== "user@gmail.com" && password !== "user123") {
        state.error = "invalid email or password acount";
        state.user = null;
      } else {
        state.user = { email, password };
        localStorage.setItem("user", JSON.stringify({ email, password }));
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
    getUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.user = user;
      }
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
export const { buy, addToCart, login, getUser, logout } = authSlice.actions;
export default authSlice.reducer;
