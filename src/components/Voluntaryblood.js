import React, { useState} from 'react'
import Required from './Required';
import axios from 'axios';
const Voluntaryblood = () => {
  const[info,setInfo]=useState([]);
  const [data,setData]=useState("")
  const submitme = (e)=>{
    e.preventDefault();
     

   axios.get('https://vitalflowauth-default-rtdb.firebaseio.com/donorlogin.json').then((res)=>setInfo(res.data)).then(()=>{console.log(info)}).catch(e=>{console.log(e)})
     
  }
  
  return (
    <div>
      <div className='grid grid-rows-2 place-items-center '>
      <div className='mt-5'>
        <form  autoComplete='off'>
          <input className='border-2 border-gray-400 p-1 rounded-lg' type='text'placeholder='  Enter Region            ' name='location' onChange={e=>{setData(e.target.value)}} />
          <button onClick={submitme} className='border-2 border-text-[#2533fb] font-extrabold text-white bg-[#2533fb] px-4 py-1 rounded-lg ml-5'>search</button>
        </form>
      {info?<Required info={info}/>:"no data"}
      </div>
      <div>
      </div>
      </div>
      {info.length>0?"cool":"no data"}
    </div>
  )
}

export default Voluntaryblood