import React from "react";
import arrow from '/arrow.png'
import bnrcircle from '/bnrcircle.png'

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">

            {/* banner text */}
          <div className="">
            <h3 className=" font-Raleway font-bold text-[18px] leading-[26px] uppercase text-[#222222] ">
              Hello i’m <span className="text-[#F05D7B]">Visual Designer</span>
            </h3>
            <h1 className="font-Raleway font-bold text-[72px] leading-[88px] mt-[20px] w-1/2">
              William Andersons
            </h1>
            <p className=" font-Raleway font-base leading-[26px] text-[#838383] w-[471px] mt-7 " >
              My ultimate motto is to fulfill the demand of the buyers by making
              them satisfied with proper file delivery in time and without
              delay.
            </p>
            <div className="flex gap-8 mt-12 items-center">
                <button type="button" className=" px-10 py-3 bg-[#8671FC] rounded-[30px] font-Raleway font-bold uppercase text-base text-white " >hire me</button>
                <button type="button" className=" flex items-center gap-7 text-[#8671FC] rounded-[30px] font-Raleway font-bold uppercase text-base  " >download resume <img src={arrow} alt="arrow" /></button>
            </div>
          </div>

          {/* banner image */}
          <div className="">
            <img src={bnrcircle} alt="bnrcircle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
