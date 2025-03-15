import React from "react";
import aboutarrow from "/aboutarrow.png";
import aboutleft from "/aboutleft.png";
import aboutright from "/aboutright.png";

const About = () => {
  return (
    <div className="py-[150px] bg-[#F05D7B] relative z-[1]">
      <img src={aboutleft} alt="aboutleft"  className="absolute top-0 left-0 z-[-1] " />
      <img src={aboutright} alt="aboutleft"  className="absolute bottom-0 right-0  " />
      <div className="container">
        <div className="flex items-center">

          {/* text left */}
          <div className="w-1/2">
            <h3 className="uppercase font-Raleway font-bold font-base leading-[26px] text-white  ">
              About Me
            </h3>
            <h2 className=" font-Raleway font-bold text-[36px] text-white w-[558px] tracking-[0.3px] mt-5  ">
              You can’t use up creativity.
              <br /> The more you use, the more you have in your signifant mind.
            </h2>
            <p className="font-Raleway text-base tracking-[0.2px] leading-[26px] text-white w-[501px] mt-7  ">
              Being the savage's bowsman, that is, the person who pulled the
              bow-oar in his boat (the second one from forward), it was my
              cheerful duty to attend upon him while taking that hard-scrabble
              scramble upon the dead whale's back. You have seen Italian
              organ-boys{" "}
            </p>
            <button
              type="button"
              className=" flex items-center gap-7 text-white rounded-[30px] font-Raleway font-bold uppercase text-base mt-[70px]  "
            >
              download resume <img src={aboutarrow} alt="arrow" />
            </button>
          </div>

          {/* text right */}
          <div className="w-1/2">
            <h2 className=" font-Raleway font-bold text-[36px] text-white w-[558px] tracking-[0.3px] mt-5  ">
              Any type of question & Discussion.
            </h2>
            <p className="font-Raleway text-base tracking-[0.2px] leading-[26px] text-white w-[501px] mt-7  ">
              Being the savage's bowsman, that is, the person who pulled the
              bow-oar in his boat
            </p>
            <a
            href="#"
              className=" flex items-center gap-7 text-white rounded-[30px] font-Raleway font-bold uppercase text-base mt-[70px]  "
            >
              WilliamAndersons@william.std 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
