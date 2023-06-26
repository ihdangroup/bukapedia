import Raact, { useState } from "react";

const Products = ({ product, addToCart }) => {
  const [modal, setModal] = useState(false);
  return (
    <div
      className={
        modal
          ? "top-0 fixed right-0 h-screen w-full flex items-center justify-center bg-slate-800/50"
          : "w-[49%] lg:w-[19%]"
      }
    >
      <div
        className={
          modal
            ? "my-2 w-[70%] text-center text-sm p-4 rounded bg-white"
            : "my-2 w-full text-center text-sm p-4 rounded bg-white"
        }
        onClick={() => setModal(!modal)}
      >
        <div className="p-4 w-[80%] h-[100px] mx-auto">
          <img src={product.image} className="w-full h-full" />
        </div>
        <h3 className="text-md truncate lg:text-lg font-bold text-slate-700">
          {product.title}
        </h3>
        {modal ? <p>{product.description}</p> : null}
        <p>$ {product.price}</p>
        <div className="flex justify-center items-center">
          <span className="text-xs text-slate-800 text-gray-200 mr-3">
            ✨ {product.rating.rate}
          </span>
          <span className="font-bold">{product.rating.count} terjual</span>
        </div>
        <div className="w-full bg-slate-800 text-white py-2 text-center rounded my-2">
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default Products;
