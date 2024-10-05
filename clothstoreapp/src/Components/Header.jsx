import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-20 w-full bg-white ">
      <div className="h-6 w-full bg-[#1E212C]"><h2 className="text-white text-center">Under Construction .....</h2></div>
      <div className="h-14 w-full flex">
        {/* LOGO AND ROUTES */}
        <div className="flex w-1/2 h-[100%] items-center justify-center gap-10">
          <div className="logo w-[20%] flex items-center gap-1 ">
            <h1 className="text-black font-extrabold text-3xl">GEN</h1>
            <span className="text-3xl text-green-800 font-extrabold">x</span>
          </div>

          <div className="flex items-center gap-4  text-sm font-bold text-[#424551] font-lato ">
            <a href="/women">Women</a>
            <a href="/mens">Men</a>
            <a href="/girls">Girls</a>
            <a href="/boys">Boys</a>
            <a className="text-red-600" href="/sale">
              Sale
            </a>
          </div>
        </div>

        {/* SEARCH BAR , LIKE & CART */}

        <div className="w-1/2 h-[100%]  flex items-center text-black">
          <div className="w-[380px] h-[44px] flex border border-[#D7DADD] items-center rounded-md">
            <input
              className="w-[90%] bg-transparent text-black outline-none px-2"
              type="text"
              placeholder="Search For Products ..."
            />
            <CiSearch className="text-3xl hover:cursor-pointer" />
          </div>
          <div className="icons w-60 h-[44px] flex items-center justify-center gap-10">
            <div className="flex items-center gap-2 justify-start px-4 border-r-2">
              <CiHeart className="text-3xl  hover:cursor-pointer hover:text-red-600" />
              <h1 className="text-2xl">5</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FaShoppingCart className="text-3xl hover:cursor-pointer " />
              <h1 className="text-2xl">5</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
