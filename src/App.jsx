import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./components/Category";
import Header from "./components/header";
import NewProduct from "./components/NewProduct";
import Products from "./components/products";
import { getProducts } from "./services/products";

function App() {
  const dispatch = useDispatch();
  const { products, cart, loading } = useSelector((state) => state.products);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const addToCart = (id) => dispatch(addToCart(id));
  const handleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const newProduct = products.filter((item) => item.id === 1);
  return (
    <>
      <div className="w-full">
        <Header handleOpen={handleOpen} cart={cart} />
        <div
          className={`w-full ${
            loading && "animate-pulse"
          } bg-gray-200 py-4 flex flex-wrap justify-between px-1 bg-gray-200 lg:p-6`}
        >
          {loading ? (
            <>
              <div className="w-full h-[30vh] flex">
                <div className="w-1/2 bg-gray-400"></div>
                <div className="w-1/2 bg-gray-600"></div>
              </div>
              <div className="w-full flex flex-wrap mt-3 justify-between">
                <div className="w-[48%] h-[100px] bg-gray-400"></div>
                <div className="w-[48%] h-[100px] bg-gray-400"></div>
                <div className="w-[48%] h-[100px] bg-gray-400"></div>
                <div className="w-[48%] h-[100px] bg-gray-400"></div>
              </div>
            </>
          ) : null}
          <NewProduct product={newProduct} loading={loading} />
          {products
            ? products.map((product, index) => {
                return (
                  <Products
                    loading={loading}
                    product={product}
                    key={index}
                    addToCart={addToCart}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
