import React from 'react'
import arrow from '/arrow.png'

const Skill = () => {
    const whtado =[
        {task: "Illustrator" , txt:"Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled" },
        {task: "UI/UX Designer" , txt:"Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled" },
        {task: "Logo Design" , txt:"Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled"},
    ]
  return (
    <div className='py-[150px]'>
        <div className="container">
            <h3 className=' uppercase font-bold font-Raleway text-[18px] leading-[26px] text-[#222222] text-center  ' >skills</h3>
            <h2 className=' uppercase font-bold font-Raleway text-[36px] tracking-[0.3px] text-[#222222] text-center mt-[20px]  ' >What Can I Do</h2>
            <div className="mt-[70px] flex gap-[70px]">
                {whtado.map((item , index)=>(
                   <div key={index} className="p-[50px] group hover:bg-[#F05D7B] border  ">
                     <h4 className='font-medium font-Raleway text-[24px] leading-[34px] text-[#222222] group-hover:text-white  '>{item.task}</h4>
                     <p className=' font-Raleway text-base text-[#838383] group-hover:text-white mt-6 mb-10 '>{item.txt}</p>
                     <a href="#" className='uppercase text-[#8671FC] group-hover:text-white    '>learn more</a>
                   </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skill