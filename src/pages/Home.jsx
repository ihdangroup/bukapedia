import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Category, ProductsWraper } from "../components";
import { getUser } from "../features/auth";
import { addToCart, getProducts } from "../features/products";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("?limit=4"));
    dispatch(getUser());
  }, []);
  return (
    <div>
      <Category />
      <ProductsWraper />
      <Link to="/products/all" className="bg-slate-800 rounded p-4 text-white">
        Show More
      </Link>
    </div>
  );
};
export default Home;
