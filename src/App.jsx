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
  const { products, cart } = useSelector((state) => state.products);
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
        <Header handleOpen={handleOpen} count={count} />
        <div className="w-full bg-gray-200 py-4 flex flex-wrap justify-between px-1 bg-gray-200 lg:p-6">
          <NewProduct product={newProduct} />
          {products
            ? products.map((product, index) => {
                return (
                  <>
                    <Products
                      product={product}
                      key={index}
                      addToCart={addToCart}
                    />
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
