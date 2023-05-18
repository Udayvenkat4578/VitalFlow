import React from 'react'
import img from './img.jpeg'
import img1 from './img1.png'
import log from './login.avif'
import elig from './elig.avif'
import camp from './camp.avif'
import blo from './blo.avif'

const Home = () => {
  return (
    <div> 
         <div className='container grid grid-cols-2 gap-2 '>
      <div className='mt-0 container  font-extrabold  '>
      <img className='  w-48 sm:w-72 md:w-96 absolute bg-contain ml-0 md:mr-0 mr-11 md:pr-0 pr-11 ' alt="hiee" src={img1}/>  
  
        <h1 className='p-10 opacity-80  text-[9px] sm:text-[15px] md:text-[15px] md:p-20 lg:p-20 lg:text-lg'>
      The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one or even you
                                                          <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Dr.RalphStanley</h1>
      </div>
      <div className='bg-white ml-10'>
     <img className='w-96 scale-75 mr-0 ml-5 relative' alt="hiee" src={img}/>  
  </div>
    </div>
    <div>
      <h3 className='font-bold ml-1 mb-3 text-[7px] sm:text-lg sm:ml-5'>Facts about Blood</h3>
    </div>
    <div className='  flex flex-row gap-1 sm:gap-2  ml-2 mr-2 sm:ml-5 md:mr-5'>
      
      <div className='sm:px-4 sm:py-2 p-1 rounded-md font-md text-white bg-[#f83232]  sm:text-[15px] text-[9px] ml '>The word "blood" appears at least once in every play by Shakespeare.</div>
     <div className='sm:px-4 sm:py-2 p-1 rounded-md font-md text-white bg-[#f83232]  sm:text-[15px] text-[9px]'>The amount of blood in a pregnant woman's body will have increased by 50% .</div>
     <div className='sm:px-4 sm:py-2 p-1 rounded-md font-md text-white bg-[#f83232]  sm:text-[15px] text-[9px]'>Our blood contains around 0.2 milligrams of gold.</div>
     <div className='sm:px-4 sm:py-2 p-1 rounded-md font-md text-white bg-[#f83232]  sm:text-[15px] text-[9px]'>In an average life time the human heart pumps 1.5 million barrels of blood.</div>
     <div className='sm:px-4 sm:py-2 p-1 rounded-md font-md text-white bg-[#f83232]  sm:text-[15px] text-[9px]'> Blood can be separated into several comp: red blood cells,etc.</div> 
  
    </div>
    <div className='grid grid-cols-1 place-items-center text-xl font-bold text-gray-700 mt-11'> 
      HOW IT WORKS!
    </div>
    <div className='grid sm:grid-cols-4 grid-cols-2 px-5 mt-11'>
      <div className='border-2 border-gray-200 shadow-xl mr-7 scale-100 rounded-sm  sm:mb-0  mb-6'><div className='text-center p-3 sm:font-extrabold font-medium text-[#f83232] mt-3 '>DONOR LOGIN</div><div><img alt='hi' src={log}/>
      </div><div className='sm:text-md text-sm p-3 text-center cursor-pointer '>Welcome to our website! By logging in, you'll have a personalized browsing experience and be able to save your preferences. Your information is safe with us. Login now and start exploring everything our site has to offer. Thank you for choosing us!</div></div>
      <div className='border-2 border-gray-200 shadow-lg mr-7 rounded-sm  sm:mb-0  mb-6'><div className='text-center p-3 sm:font-extrabold font-medium text-[#f83232] mt-3'>ELIGIBILITY CRITERIA</div><div className='mt-10'><img alt='hi' src={elig}/></div><div className='sm:text-md text-sm p-3  text-center cursor-pointer '> it's important to check your eligibility criteria before getting started. There are a few basic requirements you'll need to meet, such as age, weight, and overall health. By checking your eligibility, you can ensure that you're able to donate safely .To learn more about eligibility criteria for blood donation</div><div className='text-right mr-5 font-bold text-black mb-2'><a className=' ' href='/elig'>Know more..</a></div></div>
      <div className='border-2 border-gray-200 shadow-lg mr-7 rounded-sm'><div className='text-center p-3 sm:font-extrabold font-medium text-[#f83232] mt-3'>BLOOD CAMP</div><div className='scale-75 '><img alt='h' src={camp}/></div><div className='sm:text-md text-sm p-3 text-center cursor-pointer'>Organizing a blood camp can be one of the most noble and selfless acts that a person can do for their community. Every day, people around the world need blood for many purposes. By organizing a blood camp, you can make adifference in someone's life.</div><div className='ml-11 mb-2 pl-4 transition-all ease-in-out hover:scale-110 '><button className='bg-[#f83232] text-white sm:font-bold font-normal px-3 pb-1 rounded-md mb-2 shadow-lg sm:mr-0 mr-8 '><a href='organise'>Organize a Camp</a> </button></div></div>
      <div className='border-2 border-gray-200 shadow-lg mr-7 v'><div  className='text-center  sm:p-3 sm:px-0 px-4 sm:font-extrabold font-medium text-[#f83232]  mt-3   sm:mr-0 mr-5'>BOOK AN APPOINTMENT</div><div className='mt-10 scale-75'><img alt='hh' src={blo}/></div><div className='sm:text-md text-sm p-3 text-center cursor-pointer'>Booking an appointment for blood donation can be an incredibly meaningful act of kindness. Blood donations are needed every day to save lives during emergencies, surgeries, and other medical procedures.By donating blood, you can directly impact someone's life in a positive way. </div><div  className='ml-7 mt-4 mb-2 pl-4 transition-all ease-in-out hover:scale-110 '><button className='bg-[#f83232] text-white sm:font-bold  font-normal px-3 pb-1 rounded-md mb-2 shadow-lg mr-5'><a href='/book'>Book an Appointment</a></button></div></div></div>

    <div className='  grid grid-cols-2 mt-9 items-center md:grid-cols-4 ml-5 mr-5 mb-11'>
    
     <div className='sm:mt-9 mt-5  sm:mr-9 mr-5 sm:p-8 p-5 font-extrabold rounded-md sm:font-extrabold text-white   bg-[#4450f5af] sm:text-xl text-md text-center'><a href='/voluntary'>
     <p className='transition-all ease-in hover:scale-105 mt-1s text-center '>Voluntary Blood Availability</p></a></div>
     <div className='sm:mt-9 mt-5  sm:mr-9 mr-5 sm:p-8 p-5 font-extrabold rounded-md sm:font-extrabold text-white   bg-[#4450f5af] sm:text-xl text-md '><a href='/Aboutblood'><span><svg width="30px " height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="info-circle"> <g> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="12" y2="16"></line> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="8"></line> </g> </g> </g> </g></svg></span> <p className='transition-all ease-in hover:scale-105 '> About Blood </p></a></div>
     <div className='sm:mt-9 mt-5  sm:mr-9 mr-5 sm:p-8 p-5 font-extrabold rounded-md sm:font-extrabold text-white   bg-[#4450f5af] sm:text-xl text-md '><a href='/Donorlogin'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-white ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</span>  <p className='transition-all ease-in hover:scale-105 '>Donor Login</p></a></div>
     <div className='sm:mt-9 mt-5  sm:mr-9 mr-5 sm:p-8 p-5 font-extrabold rounded-md sm:font-extrabold text-white   bg-[#4450f5af] sm:text-xl text-md text-center'><a href='/Bloodavail'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-2 stroke-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
</svg></span> <p className='transition-all ease-in hover:scale-105 flex flex-row text-md'>Blood Availability</p></a></div>
    </div>
    </div>

  )
}

export default Home