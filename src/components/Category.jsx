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
      <h1 className="text-3xl font-bold">Categories</h1>
      <div className="flex justify-center my-8 text-sm flex-wrap">
        {categorys.map((category) => (
          <Link
            to={`/products/${category.name}`}
            key={category.name}
            className="rounded mx-2 cursor-pointer border p-3"
          >
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
