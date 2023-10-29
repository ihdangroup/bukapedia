import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./components/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./Cek";
import { addToCart, getProducts, getUser } from "./features/auth/authSlice";
import { Layout, Skeleton } from "./components";

function App() {
  const dispatch = useDispatch();
  const { products, loading, isLogin } = useSelector((state) => state.auth);
  const masukKeranjang = (product) => dispatch(addToCart(product));
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUser());
  }, []);
  return (
    <>
      <div className="w-full">
        <Layout>
          <div
            className={`w-full ${
              loading && "animate-pulse"
            } bg-gray-200 py-4 flex flex-wrap justify-between px-1 bg-gray-200 lg:p-6`}
          >
            {loading ? (
              <div className="w-full flex flex-wrap justify-between">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              products?.map((product) => (
                <Products
                  loading={loading}
                  product={product}
                  key={product.id}
                  addToCart={masukKeranjang}
                />
              ))
            )}
            <ToastContainer />
          </div>
        </Layout>
        )
      </div>
    </>
  );
}
export default App;
