import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between p-6 sticky top-0 backdrop-blur-sm z-10">
      <h3 className=" text-white bg-gray-950 py-1 px-4 rounded-full">
        Target Audience
      </h3>
      <h5 className="tracking-[0.2em] ">DIGITAL BANKING PLATFORM</h5>
    </div>
  );
};

export default Navbar;
