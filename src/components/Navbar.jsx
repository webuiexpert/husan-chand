import React, { useState } from "react";
import logoImg from "../assets/logo1.png";
import Headroom from "react-headroom";

function Navbar() {
  const [menuOpen, SetmenuOpen] = useState(false);

  return (
    <>
    <Headroom>
      <div className="nav bg-[#1e1e79] w-[100%] lg:px-0 py-5">
      <div className="nav bg-[#1e1e79] lg:max-w-[1320px] w-full mx-auto flex lg:px-0 px-2 items-end justify-between">
        <div className="logo">
          <img
            className="lg:w-[80%] w-[60%] sm:w-[70%] md:w-[80%]"
            src={logoImg}
            alt=""
          />
        </div>
        <div className="flex gap-7 items-center lg:w-auto  w-[80%]">
          <ul className="hidden sm:hidden md:hidden lg:flex items-center gap-7 text-[20px] text-white font-semibold font-[Montserrat] ">
            <a href="#about">
              <li className="leading-[18px]">About</li>
            </a>
            <a href="#expertise">
              <li className="leading-[18px]">Expertise</li>
            </a>
            <a href="#reviews">
              <li className="leading-[18px]">Reviews</li>
            </a>
            <a href="#casestudies">
              <li className="leading-[18px]">Casestudies</li>
            </a>
            <a href="#contact">
              <li className="leading-[18px]">Contact</li>
            </a>
          </ul>
         <button className="bookBtn lg:block hidden relative lg:text-[18px] text-[16px] leading-8 lg:px-4 px-8 py-4 border text-white font-bold bg-[#13a300]"><a href="#contact">Book An Appointment</a> </button>
        </div>

     
      </div>
      </div>
      </Headroom>
    </>
  );
}

export default Navbar;
