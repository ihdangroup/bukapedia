import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Layout } from "../components";
import { buy, editQuantity } from "../features/products";

const CartPage = () => {
  const { carts } = useSelector((state) => state.productSlice);
  const cartss = carts.length > 0 ? JSON.parse(carts) : carts;
  const dispatch = useDispatch();
  const calculate = (cart, index, operator) => {
    const item = {
      cart,
      index,
      operator,
    };
    dispatch(editQuantity(JSON.stringify(item)));
  };
  const total = cartss?.reduce((cart, num) => {
    return cart + num.newTotal;
  }, 0);
  console.log(cartss);
  return (
    <Layout>
      <div className="p-3 my-4 text-sm lg:text-base rounded border p-2 shadow">
        {cartss.length > 0 ? (
          <div>
            <table className="text-center w-full bg-white">
              <thead>
                <tr className=" w-full flex rounded bg-gray-300 mb-2 p-3 flex-wrap">
                  <th className="w-[40%]">Product</th>
                  <th className="w-[20%]">Price</th>
                  <th className="w-[20%]">Quantity</th>
                  <th className="w-[20%]">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartss.map((cart, index) => (
                  <tr
                    className={`w-full px-3 py-4 flex flex-wrap rounded my-2 shadow ${
                      index % 2 !== 0 ? "bg-gray-300" : ""
                    }`}
                    key={cart.id}
                  >
                    <td className="w-[40%] font-bold line-clamp-3">
                      {cart.title}
                    </td>
                    <td className="w-[20%]">$ {cart.price}</td>
                    <td className="w-[20%]">
                      <button
                        className="border p-2"
                        onClick={() => calculate(cart, index, "min")}
                      >
                        -
                      </button>
                      {cart.qty}
                      <button
                        className="border p-2"
                        onClick={() => calculate(cart, index, "plus")}
                      >
                        +
                      </button>
                    </td>
                    <td className="w-[20%]">$ {cart.newTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-6 w-full border shadow-md  p-2 rounded font-bold">
              <h4>Total Harga:</h4>
              <div className="ml-4">$ {total}</div>
            </div>
            <button
              className="w-full text-white bg-black border rounded p-2 my-2 text-white"
              onClick={() => dispatch(buy())}
            >
              Bayar Sekarang
            </button>
          </div>
        ) : (
          <span className="text-center">Belum ada produk dikeranjang</span>
        )}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default CartPage;
