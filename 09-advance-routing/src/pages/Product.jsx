import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center py-4 gap-8 ">
        <Link to="/product/men" className="font-semibold text-fuchsia-600">
          Men
        </Link>
        <Link to="/product/women" className="font-semibold text-fuchsia-600">
          Women
        </Link>
        <Link to="/product/kids" className="font-semibold text-fuchsia-600">
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
