import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user, carts } = useSelector((state) => state.auth);
  const cartss = carts.length > 0 ? JSON.parse(carts) : carts;
  return (
    <div className="w-full p-6 flex justify-between bg-slate-800 text-white">
      <div>
        <Link to="/" className="text-2xl">
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
        <Link className="text-sm p-2 rounded border" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
