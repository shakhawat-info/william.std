import React from "react";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex justify-between ">
          <img src={logo} alt="logo" className="max-h-fit " />
          <ul className="flex gap-x-[46px] font-Montserrat font-semibold text-base text-[#838383] capitalize  ">
            <li className="hover:text-[#8671FC] duration-[.4s] transition-[.4s] cursor-pointer "  >about us</li>
            <li className="hover:text-[#8671FC] duration-[.4s] transition-[.4s] cursor-pointer "  >services</li>
            <li className="hover:text-[#8671FC] duration-[.4s] transition-[.4s] cursor-pointer "  >portfolio</li>
            <li className="hover:text-[#8671FC] duration-[.4s] transition-[.4s] cursor-pointer "  >contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
