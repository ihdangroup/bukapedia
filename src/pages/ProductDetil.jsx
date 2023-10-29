import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "../components";
import { addToCart } from "../features/auth/authSlice";
const ProductDetil = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const product = products?.filter((product) => product.id == id);
  const masukKeranjang = (product) => {
    if (user) {
      dispatch(addToCart(product));
    } else {
      navigate("/login");
    }
  };
  return (
    <Layout>
      <div className="w-full p-8  mx-auto my-6">
        <div className="text-center mb-6">
          <h2 className=" text-blue-600 text-2xl font-bold">Product Detil</h2>
          <Link to="/" className="underline my-2">
            Back to home
          </Link>
        </div>
        {product.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col rounded border p-4 lg:flex-row justify-between"
          >
            <div className="lg:w-[40%] flex p-4 rounded justify-center items-center shadow-lg">
              <img src={`${item.image}`} width="60%" alt="" />
            </div>
            <div className="lg:w-[50%] mt-4 lg:mt-0 font-bold">
              <h3 className="text-2xl text-blue-600">{item.title}</h3>
              <p className="my-2 font-extrabold"> $ {item.price}</p>
              <span className="px-3 py-1 rounded text-white bg-blue-500">
                {item.rating.count} stocks left
              </span>
              <h5 className="text-xl my-3">Description</h5>
              <p className="font-normal">{item.description}</p>
              <button
                className=" mt-3 bg-black w-full px-6 py-3 rounded text-white font-bold"
                onClick={() => masukKeranjang(JSON.stringify(item))}
              >
                Add to cart
              </button>
            </div>
            <ToastContainer />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductDetil;
