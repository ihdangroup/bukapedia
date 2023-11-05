import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Category, Header, ProductsWraper } from "../components";
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
      <Header />
      <Category />
      <ProductsWraper />
      <div className="w-full flex justify-center">
        <Link
          to="/products/all"
          className="bg-purple-500  rounded px-4 py-2  text-white"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};
export default Home;
