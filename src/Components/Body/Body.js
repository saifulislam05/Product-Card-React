// Body.js
import React from "react";
import Products from "./Products";

const Body = () => {
 
  return (
    <div className="w-6/12 mx-auto flex flex-col justify-center px-5 py-2 lg:px-auto lg:pt-12">
      <h2 className="text-3xl font-bold pb-4">Products</h2>
      <Products/>
    </div>
  );
};

export default Body;
