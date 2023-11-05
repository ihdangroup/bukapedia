import { createSlice } from "@reduxjs/toolkit";
const user = localStorage.getItem("user");
const initialState = {
  user: user ? user : null,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
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
  },
});
export const { logout, login, getUser } = authSlice.actions;
export default authSlice.reducer;
