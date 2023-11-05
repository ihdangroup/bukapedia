import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authSlice);
  const { carts } = useSelector((state) => state.productSlice);
  const cartss = carts?.length > 0 ? JSON.parse(carts) : carts;
  return (
    <div className="w-full p-6  flex justify-between bg-white">
      <div>
        <Link to="/" className="text-lg font-bold">
          Bukapedia
        </Link>
      </div>
      {user ? (
        <div className="flex items-center">
          <Link to="/cart" className="cart cursor-pointer">
            🛒
            {cartss?.length}
          </Link>
          <button
            onClick={() => dispatch(logout())}
            className="ml-3 rounded p-2 border text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link className="text-sm p-2 shadow rounded border" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
