import React from "react";

const NewProduct = ({ product, loading, addToCart }) => {
  return (
    <>
      {product.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full bg-white ${loading ? "animate-pulse" : ""} p-6`}
          >
            <div className="flex items-center">
              <div className="w-1/2 flex justify-center h-[300px]">
                <img
                  src={item.image}
                  className="w-full lg:w-2/3 h-full"
                  alt=""
                />
              </div>
              <div className="p-6 w-1/2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-md my-2">{item.description}</p>
                <p className="font-bold">$ {item.price}</p>
                <button
                  className="mt-2 text-white text-sm w-full rounded py-2 bg-slate-800"
                  onClick={() => addToCart(JSON.stringify(item))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewProduct;
