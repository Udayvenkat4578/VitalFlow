import React from 'react'

const Bloodunits = (props) => {
  return (
    <div>
        <div className='grid sm:grid-cols-2 grid-cols-1 place-items-center p-10'>
          <div className='border-3 border-gray-300 shadow-lg p-10 rounded-sm'>
           
                <h1 className='mt-5 text-lg font-black text-center text-blue-700 '>
                    BLOOD UNITS COLLECTED
                </h1>
                <h1 className='text-center mt-3'>{props.count}</h1>
          
          </div>
          <div className='border-3 border-gray-300 shadow-lg rounded-sm '>
            <div className='p-10'>
                <h1 className='mt-5 text-lg font-black text-center text-blue-700 ml-4 mr-4'>
                    DONORS REGISTERED
                </h1>
                <h1 className='text-center mt-3'>{props.count}</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Bloodunits