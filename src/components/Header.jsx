import React from "react";

const Header = () => {
  return (
    <div className="text-center py-24 mb-8 items-center bg-gradient-to-r from-white via-blue-200 to-white flex">
      <div className="w-full">
        <h1 className="text-3xl lg:text-[60px] mb-6 font-extrabold">
          Welcome to <span className="text-purple-500">Bukapedia</span>
        </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
          alias a! Aspernatur deleniti quos eos.
        </span>
      </div>
    </div>
  );
};

export default Header;
