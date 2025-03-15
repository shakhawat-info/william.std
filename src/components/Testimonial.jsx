import React from "react";
import comma from '/comma.png'

const Testimonial = () => {
    const sliderInfo = [
        {image: "/profile.jpg" , txt: "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuali." , name: "Cardarion Hart" , title:"CEO of MANTUL"},
        {image: "/profile.jpg" , txt: "I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of bo." , name:"Kobus van de Vegte" , title: "CEO of SUKSESPOLL" },
        {image: "/profile.jpg" , txt: "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuali." , name:"Sara Reyes" , title:"CEO of MAJUMUNDUR"}
    ]
  return (
    <div className="">
      <div className="container">

        <div className="flex gap-10">

        {/* text part */}
        <div className="min-w-[320px] ">
          <h3 className=" uppercase font-bold font-Raleway text-[18px] leading-[26px] text-[#222222]  ">
            testimonials
          </h3>
          <h2 className="  font-bold font-Raleway text-[36px] leading-[40px] text-[#222222] mt-[20px]  ">
            What they say about me
          </h2>

          <p className=' font-Raleway text-base text-[#838383] group-hover:text-white mt-6 mb-10 '>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second on.</p>
        </div>

        {/* slider part */}
        <div className="flex gap-10">
           {sliderInfo.map((item , index)=>(
            <div key={index}>
                <img src={item.image} alt="profile" className="w-3/4"/>
                <img src={comma} alt="comma" />
                <p className=' font-Raleway text-base text-[#838383] group-hover:text-white mt-6 mb-10 '>{item.txt}</p>
                <h4 className=" font-Raleway font-bold text-[18px] text-[#222222]  ">{item.name}</h4>
                <span className="font-Montserrat font-semibold text-[14px] text-[#838383]  ">{item.title}</span>
            </div>
           ))}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
