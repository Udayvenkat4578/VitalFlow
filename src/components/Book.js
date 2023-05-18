import React from 'react'
import appoint from './appoint.avif'
import { PopupButton } from "react-calendly";


const Book = () => {

        
    
    



  return (
    <div>
  
        <div className='grid  grid-cols-1 sm:grid-cols-2  place-items-center '>
           
            <div >
                <img className=' scale-75' alt='jj' src={appoint}/>
            </div>
            
           
                    <div className='text-black border-2 border-gray-100 rounded-md shadow-xl p-3 mr-11 ml-11' >
                    <div className='text-[#f83232] font-extrabold text-center text-xl mb-8 mt-5'>
                    Book An Appointment</div>
                    <div className='text-center font-bold mb-8'>
                    "Blood donation is not just an act of kindness, it is an act of selflessness and a gift of life to someone in need."
                    </div>
                    <div className='border-1 border-gray-400'>
                        <div className='grid grid-cols-1 place-items-center'>
                       
                        <div className=" mb-5 px-5 py-2 rounded-md font-semibold bg-blue-700 text-white">
      <PopupButton 
        url="https://calendly.com/udayvenkat4578/appreciation-for-booking-an-appointment-for-blood-donation"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>                         </div>
                        </div>
                    </div>
            </div>
             
            
        </div>
    
  )
}

export default Book