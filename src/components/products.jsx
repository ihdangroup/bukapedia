import Raact, { useState } from "react";

const Products = ({ product, addToCart }) => {
  return (
    <>
      <div
        className={`my-2 w-[49%] lg:w-[19%] text-center text-sm p-4 rounded bg-white`}
      >
        <div className="p-4 w-[80%] h-[100px] mx-auto">
          <img src={product.image} className="w-full h-full" />
        </div>
        <h3 className="text-md truncate lg:text-lg font-bold text-slate-700">
          {product.title}
        </h3>
        <p>$ {product.price}</p>
        <div className="flex justify-center items-center">
          <span className="text-xs text-slate-800 text-gray-200 mr-3">
            ✨ {product.rating.rate}
          </span>
          <span className="font-bold">{product.rating.count} terjual</span>
        </div>
        <div
          onClick={() => addToCart(JSON.stringify(product))}
          className="w-full bg-slate-800 text-white py-2 text-center rounded my-2 cursor-pointer"
        >
          Add To Cart
        </div>
      </div>
    </>
  );
};

export default Products;
