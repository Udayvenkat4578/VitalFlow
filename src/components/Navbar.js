import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-white '>
            <div>
                <ul className='md:mt-5 mt-2 ml-3 font-extrabold text-lg'>
                    <li className=' text-sm sm:text-xl text-[#2533fb] absolute cursor-cell mb-11'>vital flow</li>
                    
                </ul>
            </div>
            <div className='opacity-80   md:flex'>
                <ul className='flex flex-row p-3  '>
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-in-out hover:text-[#2533fb] hover:scale-110'><a href ='/'>HOME </a></li> 
                <li className='md:mr-5 mr-2  font-bold md:text-lg text-xs transition-all ease-out hover:text-[#2533fb] hover:scale-110'><a href ='/Contact'>CONTACT</a> </li> 
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-[#2533fb] hover:scale-110'><a href ='/About'>ABOUT US</a> </li> 
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-[#2533fb] hover:scale-110'><a href ='/Signup'>SIGN UP</a> </li> 
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-[#2533fb] hover:scale-110'><a href ='/Login'>LOG IN </a></li>     
             </ul>
            </div> 


        </div>
        <hr className=''></hr>
    </div>
  )
}

export default Navbar