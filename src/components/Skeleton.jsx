import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full flex flex-wrap mt-3 justify-between">
      <div className="w-[48%] h-[100px] bg-gray-400"></div>
      <div className="w-[48%] h-[100px] bg-gray-400"></div>
      <div className="w-[48%] h-[100px] bg-gray-400"></div>
      <div className="w-[48%] h-[100px] bg-gray-400"></div>
    </div>
  );
};

export default Skeleton;
