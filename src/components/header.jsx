import React from "react";

const Header = ({ handleOpen, count }) => {
  return (
    <div className="w-full p-6 flex justify-end bg-slate-800 text-2xl text-white">
      <div className="cart" onClick={handleOpen}>
        🛒
        {count}
      </div>
    </div>
  );
};

export default Header;
