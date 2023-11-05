import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categorys = [
    {
      name: "men's clothing",
    },
    {
      name: "women's clothing",
    },
    {
      name: "jewelery",
    },
    {
      name: "electronics",
    },
  ];
  return (
    <div className="w-full text-center">
      <span className="text-xl lg:text-3xl font-bold border border-0 border-b-2 border-b-purple-500 py-2">
        Categories
      </span>
      <div className="flex justify-center my-8 text-sm flex-wrap">
        {categorys.map((category) => (
          <Link
            to={`/products/${category.name}`}
            key={category.name}
            className="rounded m-2 cursor-pointer border bg-white shadow p-3"
          >
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
