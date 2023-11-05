import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../features/products";
import ProductItem from "./ProductItem";
import Skeleton from "./Skeleton";

const ProductsWraper = () => {
  const { products, loading } = useSelector((state) => state.productSlice);
  const masukKeranjang = (product) => dispatch(addToCart(product));
  return (
    <div
      className={`w-full ${
        loading && "animate-pulse"
      } py-4 flex flex-wrap justify-between px-1 `}
    >
      {loading ? (
        <Skeleton />
      ) : (
        products?.map((product) => (
          <ProductItem
            loading={loading}
            product={product}
            key={product.id}
            addToCart={masukKeranjang}
          />
        ))
      )}
    </div>
  );
};

export default ProductsWraper;
