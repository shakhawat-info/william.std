import React from 'react'

const Clients = () => {

    const clientImages = ["client1.png" , "client2.png" , "client3.png" , "client4.png" , "client5.png"]
  return (
    <div className='py-[100px]'>
        <div className="container">
            <div className="flex justify-around">
                {clientImages.map((item , index)=> <img key={index} src={item} alt="client" /> )}
            </div>
        </div>
    </div>
  )
}

export default Clients