import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, showLoginPage } from "../features/auth/authSlice";

const Header = ({ handleOpen, cart, isOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const showLogin = () => {
    dispatch(showLoginPage());
  };
  return (
    <div className="w-full p-6 flex justify-between bg-slate-800 text-white">
      <div>
        <div className="text-2xl">Bukapedia</div>
      </div>
      {user ? (
        <div className="flex items-center">
          {isOpen ? (
            <div className="mr-2" onClick={handleOpen}>
              Home
            </div>
          ) : null}
          <div className="cart cursor-pointer" onClick={handleOpen}>
            🛒
            {cart.length}
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="ml-3 rounded p-2 border text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="text-sm p-2 rounded border" onClick={showLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
