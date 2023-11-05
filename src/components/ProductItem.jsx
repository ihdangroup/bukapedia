import Raact, { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className={`my-2 w-[49%] border flex flex-col justify-between lg:w-[24%] text-sm p-4 rounded bg-white`}
      >
        <div className="w-full">
          <div className="p-4 w-full h-[150px] lg:h-[250px] mx-auto">
            <img src={product.image} className="w-full h-full object-cover" />
          </div>
          <div className="mb-4">
            <h3 className="text-base line-clamp-2 lg:text-lg  text-slate-700 line-clamp-3 mb-2">
              {product.title}
            </h3>
            <span className="font-bold text-xs bg-purple-500 shadow p-2 rounded text-white">
              {product.rating.count} stocks left
            </span>
          </div>
        </div>
        <div className="items-center flex mt-2 justify-between font-bold">
          <p>$ {product.price}</p>
          <div className="flex justify-center items-center">
            <span className="text-xs text-slate-800 text-gray-200 mr-3">
              {product.rating.rate}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
