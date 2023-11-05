import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import store from "./app/index.js";
import { LoginPage } from "./Cek.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductDetil from "./pages/ProductDetil.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product/:id", element: <ProductDetil /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/products/:params", element: <ProductsPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
