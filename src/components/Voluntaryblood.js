import React, { useEffect, useState} from 'react'
import axios from 'axios';
const Voluntaryblood = () => {
  const[info,setInfo]=useState([]);
  const [data,setData]=useState("")
  const submitme = (e)=>{
    e.preventDefault();
     

     
  }
  useEffect(()=>{
    axios.get('https://login-4988b-default-rtdb.firebaseio.com//donorlogin.json').then((res)=>setInfo(res.data)).then(()=>{console.log(Object.values(info))}).catch(e=>{console.log(e)})

  })
  return (
    <div>
      <div className='grid grid-rows-2 place-items-center '>
      <div className='mt-5'>
        <form  autoComplete='off'>
          <input className='border-2 border-gray-400 p-1 rounded-lg' type='text'placeholder='  Enter Blood group            ' value={data} name='location' onChange={e=>{setData(e.target.value)}} />
          <button onClick={submitme} className='border-2 border-text-[#2533fb] font-extrabold text-white bg-[#2533fb] px-4 py-1 rounded-lg ml-5'>search</button>
        </form>
      </div>
      <div>
      </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-5 border-2 border-gray-300" >    
          {Object.keys(info).length>0 ?
      Object.values(info).filter(pto=>
        pto.bloodgroup.toLowerCase()
        .includes(data.toLowerCase())).map(c=>
        <div className='grid grid-rows-2   border-2 border-gray-200 shadow-lg rounded-md p-5 bg-white opacity-90 place-items-start'>
       <div><p className='font-bold text-md text-center '><span className='text-blue-600'>Name:     </span>{c.username}</p></div>
       <div><p className='font-bold text-md text-center'><span className='text-blue-600'>Bloodgroup:    </span> {c.bloodgroup }</p></div>
       <div><p className='font-bold text-md text-center'><span  className='text-blue-600'>Phonenumber:</span> {c.phonenumber}</p></div>
       <div><p className='font-bold text-md text-center'><span className='text-blue-600'>email:</span>  {c.email}</p></div>
       <div><p className='font-bold text-md text-center'><span className='text-blue-600'>Location:</span>  {c.location}</p></div>




       
       </div>):<div className='grid grid-cols-1 place-items-center'>
<div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-80 p-11">No Data to Display <p>Please Enter the Blood 
    Type</p></h5>


</div>
</div>}</div>

    </div>
  )
}

export default Voluntaryblood


