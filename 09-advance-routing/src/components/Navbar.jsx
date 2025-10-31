import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-cyan-500 px-8 py-6 ">
      <h2 className="text-3xl font-bold">Shreyans</h2>
      <div className="flex gap-10 font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/product"}>Product</Link>
      </div>
      <button className="px-4 py-1 bg-black text-white rounded-full active:scale-95">
        Explore
      </button>
    </div>
  );
};

export default Navbar;
