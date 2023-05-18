import React from 'react'
import img4 from './img4.png'
import emailjs  from 'emailjs-com'
import {useState ,useRef} from 'react'
import axios from 'axios'
const Contact = () => {
  
  const[data,setData]=useState(
    {
      username:'',
      email:'',
      Description:''
      

    }
  )
  const {username,email,description}=data;
    
 const changeHandler = e=>{
  setData({ ...data,[e.target.name]:e.target.value})
 }


 
  const form = useRef();

 const submitme= e =>{
 e.preventDefault();
  console.log(data)
  setData("");
  alert("we'll contact you soon")
  axios.post('https://signupauth-2ac8a-default-rtdb.firebaseio.com/contact.json',data).then(()=>{alert("Done")}).catch((err)=>{console.log(err)})
  
  emailjs.sendForm('service_95ur06a', 'template_u5jgt8g', form.current, 'k9sAVSzScreKyw7Bv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
 }



  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2  '>
        <div className=' hidden sm:grid '><img className='' alt="h" src={img4}/></div>
        <div  className=''>
          <div className='grid grid-cols-1 bg-white  mt-11 '>
         


 

  
    <div className='p-5 md:p-2 sm:place-items-center ml-11 sm:ml-0' >
    <div class="max-w-sm  overflow-hidden shadow-xl stroke-black rounded-lg ">
    <div class="border-r border-b border-3s border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal">
      <center>
      <h1 className='text-[#1a1c31c6] font-bold  mt-6 text-center text-2xl'>We'd love to collaborate!</h1> 
        <h1 className='text-[#2533fb] font-bold text-2xl mt-6'>Contact Us</h1> 
        <form  className='ml-2 mr-5' onSubmit={submitme} autoComplete='off' ref = {form}>
         <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-5 ml-11 '>Username</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2' type="text" name='username' placeholder='    Enter name' value={username} onChange={changeHandler} required/><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Email</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='email'placeholder='    Enter email'value={email} onChange={changeHandler}  required/><br></br>
        
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2  ml-11 '>Description</h3></div>
        <input className='border-2 border-gray-300 h-20 w-60 rounded-lg text-left'  type="text" name='description'placeholder='    Enter Your prompt'value={description} onChange={changeHandler} required/><br></br>
<br></br>
<button className='border-2 border-text-[#2533fb] font-extrabold text-white bg-[#2533fb] px-4 py-2 rounded-lg' onClick={submitme}> submit </button>
      
        </form>
        <button>
          <div className='flex flex-row mt-8 bg-white border-2 border-gray-300 px-8 py-1  rounded-lg'>
<div><svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white"></path> </g></svg></div>
            <div className='ml-2 text-md font-bold  '> <a href='https://www.reddit.com/' >connect us on Reddit</a></div>
          </div>
        </button>
         <button>
          <div className='flex flex-row mt-4 bg-white border-2 border-gray-300 px-6 py-1 rounded-lg mb-6'>
          <div><svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle> <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"> <stop stop-color="#18ACFE"></stop> <stop offset="1" stop-color="#0163E0"></stop> </linearGradient> </defs> </g></svg></div>
            <div className='ml-2 text-md font-bold '>  <a href='https://www.facebook.com/' >connect us on Facebook </a></div>
          </div>
        </button>
      </center>
      </div>
      </div>
    </div>
  



</div>
        </div>
      </div>
    </div>
  )
}

export default Contact






