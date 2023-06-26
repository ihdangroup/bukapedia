import React from "react";

const Category = ({ category }) => {
  return (
    <div className="w-full">
      <marquee behavior="" direction="">
        .{category}
      </marquee>
    </div>
  );
};

export default Category;
