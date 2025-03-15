import React from "react";
import aboutleft from "/aboutleft.png";
import aboutright from "/aboutright.png";
import footlogo from '/footlogo.png'

const Footer = () => {
  return (
    <div className=" bg-[#F05D7B] pt-[100px] relative  ">
      <img
        src={aboutleft}
        alt="aboutleft"
        className="absolute top-0 left-0  "
      />
      <img
        src={aboutright}
        alt="aboutright"
        className="absolute bottom-0 right-0  "
      />
      <div className="container">
        <h3 className=" uppercase font-bold font-Raleway text-[18px] leading-[26px] text-white text-center  ">
          contact us
        </h3>
        <h2 className=" w-[420px] mx-auto font-bold font-Raleway text-[36px] text-white text-center mt-[20px]  ">
          Let’s talk, and make something great
        </h2>

        <div className="flex justify-center mt-[50px]">
            <button type="button" className=" py-5 px-[50px] bg-[#8671FC] font-Raleway font-bold text-white uppercase rounded-[30px]  ">contact us</button>
        </div>


      </div>

        {/* copyright */}
        <hr className=" mt-[50px] pb-1   " />
        <div className="container">
            <img src={footlogo} alt="footlogo" className="mt-[45px]" />
            <p className=" text-center font-Raleway text-base leading-[26px] tracking-[0.2px] text-white mt-7 pb-10  ">Copyright © 2020 william.std | all right reserved</p>
        </div>
    </div>
  );
};

export default Footer;
