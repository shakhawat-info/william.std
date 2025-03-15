import React from "react";
import portfolio from '/portfolio.avif'

const Portfolio = () => {
  return (
    <div className="pb-[150px]">
      <div className="container">
        <h3 className=" uppercase font-bold font-Raleway text-[18px] leading-[26px] text-[#222222] text-center  ">
          skills
        </h3>
        <h2 className=" uppercase font-bold font-Raleway text-[36px] tracking-[0.3px] text-[#222222] text-center mt-[20px]  ">
          What Can I Do
        </h2>
        <ul className="flex justify-center gap-[53px] mt-10 font-Montserrat font-semibold text-base text-[#838383] capitalize   ">
            <li className=" hover:text-[#8671FC] cursor-pointer text-[#8671FC] ">all</li>
            <li className=" hover:text-[#8671FC] cursor-pointer  ">Illustration</li>
            <li className=" hover:text-[#8671FC] cursor-pointer  ">UI/UX</li>
            <li className=" hover:text-[#8671FC] cursor-pointer  ">Logo</li>
        </ul>

        <div className="grid grid-cols-3 gap-7 mt-[70px] "   >
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
            <div className="item h-[334px] bg-black "><img src={portfolio} alt="portfolio" className=" w-full h-full object-cover " /></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
