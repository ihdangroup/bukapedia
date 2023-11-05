import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Layout, ProductsWraper } from "../components";
import { getProducts } from "../features/products";

const ProductsPage = () => {
  const { params } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts(params == "all" ? params : `/category/${params}`));
  }, []);
  return (
    <Layout>
      <h1 className="text-3xl my-4 font-bold">{params}</h1>
      <ProductsWraper />
    </Layout>
  );
};

export default ProductsPage;
