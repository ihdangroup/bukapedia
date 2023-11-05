import React from "react";

const SkeletonItem = () => {
  return (
    <div className="w-[49%] mb-2 lg:w-[24%]  rounded bg-white p-4">
      <div className="p-4 mb-2 w-full h-[150px] lg:h-[250px] mx-auto bg-[#eaeaea]"></div>
      <p className="h-[7px] bg-[#eaeaea] w-full"></p>
      <p className="h-[7px] bg-[#eaeaea] my-2 w-full"></p>
      <p className="h-[7px] bg-[#eaeaea] w-full"></p>
      <div className="w-1/2 bg-[#eaeaea] my-2 h-[20px] rounded"></div>
    </div>
  );
};
const Skeleton = () => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
};
export default Skeleton;
