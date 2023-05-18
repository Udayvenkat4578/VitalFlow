import React from 'react'
import cam from './cam.avif'
import { PopupButton } from "react-calendly";


const Book = () => {



  return (
    <div>
        <div className='grid  grid-cols-1 sm:grid-cols-2  place-items-center '>
           
            <div >
                <img className=' scale-75' alt='jj' src={cam}/>
            </div>
            
           
                    <div className='text-black border-2 border-gray-100 rounded-md shadow-xl p-3 mr-11 ml-11 mt-11 mb-8 pt-4' >
                    <div className='text-[#f83232] font-extrabold text-center text-xl mb-8 mt-5'>
                    ORGANIZE A BLOOD CAMP</div>
                    <div className='text-center font-bold mb-8'>
                    "Bringing together a community to donate blood is not just about saving lives, it's about fostering a culture of giving and making a positive impact on the world."                    </div>
                    <div className='border-1 border-gray-400'>
                        <div className='grid grid-cols-1 place-items-center'>
                       
                        <div className=" mb-5 px-5 py-2 rounded-md font-semibold bg-blue-700 text-white">
      <PopupButton 
        url="https://calendly.com/udayvenkat4578/organizing-a-blood-camp"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div> 
                        </div>
                        </div>
                    </div>
            </div>
             
            
        </div>
    
  )
}

export default Book