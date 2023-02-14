import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SILVER.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed z-1 right-0 top-0 w-[45%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            SILVER.
          </h1>

          <ul className=" uppercase p-4">
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Company</li>
            <li className="p-4 border-b border-b-gray-600">Resources</li>
            <li className="p-4 border-b border-b-gray-600">About</li>
            <li className="p-4 border-b border-b-gray-600">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
