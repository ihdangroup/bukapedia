import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./components/Category";
import Header from "./components/header";
import NewProduct from "./components/NewProduct";
import Products from "./components/products";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./Cek";
import { addToCart, getProducts, getUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const { products, carts, loading, isLogin, user } = useSelector(
    (state) => state.auth
  );
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const masukKeranjang = (product) => dispatch(addToCart(product));
  const handleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUser());
  }, []);
  const newProduct = products.filter((item) => item.id === 1);
  const cartss = carts.length > 0 ? JSON.parse(carts) : carts;
  const total = cartss?.reduce((cart, num) => {
    return cart + num.newTotal;
  }, 0);
  return (
    <>
      <div className="w-full">
        {!isLogin ? (
          <>
            <Header handleOpen={handleOpen} cart={cartss} />
            {isOpen ? (
              <div className="p-3">
                <table className="border text-center w-full">
                  <thead>
                    <tr className="w-full flex bg-slate-400 p-3 flex-wrap">
                      <th className="w-[40%]">Product</th>
                      <th className="w-[20%]">Price</th>
                      <th className="w-[20%]">Quantity</th>
                      <th className="w-[20%]">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartss.map((cart, index) => (
                      <tr
                        className={`w-full px-3 py-4 flex flex-wrap ${
                          index % 2 === 0 ? "bg-blue-300" : ""
                        }`}
                        key={cart.id}
                      >
                        <td className="w-[40%] font-bold">{cart.title}</td>
                        <td className="w-[20%]">$ {cart.price}</td>
                        <td className="w-[20%]">{cart.qty}</td>
                        <td className="w-[20%]">$ {cart.newTotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex mt-6 w-full font-bold">
                  <h4>Total Harga:</h4>
                  <div className="ml-4">$ {total}</div>
                </div>
              </div>
            ) : (
              <div
                className={`w-full ${
                  loading && "animate-pulse"
                } bg-gray-200 py-4 flex flex-wrap justify-between px-1 bg-gray-200 lg:p-6`}
              >
                {loading ? (
                  <>
                    <div className="w-full h-[30vh] flex">
                      <div className="w-1/2 bg-gray-400"></div>
                      <div className="w-1/2 bg-gray-600"></div>
                    </div>
                    <div className="w-full flex flex-wrap mt-3 justify-between">
                      <div className="w-[48%] h-[100px] bg-gray-400"></div>
                      <div className="w-[48%] h-[100px] bg-gray-400"></div>
                      <div className="w-[48%] h-[100px] bg-gray-400"></div>
                      <div className="w-[48%] h-[100px] bg-gray-400"></div>
                    </div>
                  </>
                ) : null}
                <NewProduct product={newProduct} loading={loading} />
                {products
                  ? products.map((product, index) => {
                      return (
                        <Products
                          loading={loading}
                          product={product}
                          key={product.id}
                          addToCart={masukKeranjang}
                        />
                      );
                    })
                  : null}
                <ToastContainer />
              </div>
            )}
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
}

export default App;
