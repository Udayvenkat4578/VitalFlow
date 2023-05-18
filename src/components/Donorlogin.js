import React from 'react'
import img4 from './img4.png'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Donorsreg from './Donorsreg'


const Login = () => {
  const[count,setCount]=useState(0);
  const[data,setData]=useState(
    {
      username:'',
      email:'',
      phonenumber:'',
      location:'',
      bloodgroup:''
      

    }
  )
  const {username,email, phonenumber,location,bloodgroup }=data;
    
 const changeHandler = e=>{
  setData({ ...data,[e.target.name]:e.target.value})
 }

 const submitme=e=>{
 e.preventDefault();
  alert("data submitted");
  console.log(data)

  setCount(count+1)

  axios.post('https://login-4988b-default-rtdb.firebaseio.com/donorlogin.json',data).then(()=>setCount(count+1))
 }

useEffect(() => {
console.log("Data submitted")
}
)
  return (
    <div>
      <div className='grid SM:grid-cols-1'>
        <div>
     <Donorsreg count={count}/>
     </div>
     
     </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 px-10 sm:px-1'>
        <div className=' hidden sm:grid'><img className='' alt="h" src={img4}/></div>
        <div  className=''>
          <div className='grid grid-cols-1 bg-white  mt-6 '>
         


 

  
    <div>
    <div class="max-w-sm  overflow-hidden shadow-xl stroke-black rounded-lg">
    <div class="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <center>
      <h1 className='text-[#0e0e0ff1] font-bold  mt-3 text-left text-2xl ml-11'>Blood Sharing is a</h1> 
      <h1 className='text-[#1a1c31c6] font-bold  text-left text-2xl ml-11 flex flex-row'><s className='text-red-800'><h1 className='text-gray-600 mr-3'>Choice</h1></s><h1 className='text-[#0e0e0ff1]'> Need.</h1></h1> 
        <h1 className='text-[#2533fb] font-bold text-2xl mt-3'>Donor Login</h1> 
        <form onSubmit={submitme} autoComplete='off'>
         <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-5 ml-11 '>Username</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2' type="text" name='username' placeholder='    Enter name' value={username}   onChange={changeHandler} required/><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Email</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='email'placeholder='    Enter email'value={email} onChange={changeHandler}  required/><br></br>
        
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2  ml-11 '>Phone number</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='phonenumber'placeholder='    Enter phonenumber'value={phonenumber} onChange={changeHandler}  required/><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>location</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='location'placeholder='    Enter city'value={location} onChange={changeHandler}  required/><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Blood group</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='bloodgroup'placeholder='    Enter blood group'value={bloodgroup} onChange={changeHandler}   required/><br></br>


<br></br>

        <input  className='border-2 border-text-[#2533fb] font-extrabold text-white bg-[#2533fb] px-4 py-2 rounded-lg' type="submit"/><br></br>
        </form>
       
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

export default Login






