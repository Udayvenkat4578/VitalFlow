import React from 'react'
import img7 from'./img7.jpg'

const About = () => {
  return (
    <div>
      
      <div className='grid grid-rows-1'>
      <img  className='' alt='hie' src={img7}/>
      </div>
      <div className='grid grid-cols-1 place-items-center sm:font-bold sm:text-lg  text-gray-600 ml-10 mr-10 p-5 mt-10 font-normal text-xs '>
      Welcome to Vital flow, a platform dedicated to the exploration and promotion of the idea of blood sharing. Our goal is to create a space where individuals can come together to learn, share, and discuss this often-misunderstood concept.

At Vital flow, we believe that blood sharing has the power to connect people, transcend boundaries, and create a sense of unity among all individuals, regardless of their background, culture, or beliefs. We believe that by understanding and embracing the practice of blood sharing, we can help foster a more compassionate, empathetic, and inclusive world.

Whether you're new to the concept of blood sharing or a seasoned practitioner, our website offers a wealth of resources, including articles, videos, and community forums, to help you deepen your understanding and explore the benefits of this practice.

Join us as we embark on this journey of discovery and growth, and together, let's build a world where blood sharing is not only accepted, but celebrated.
      </div>
      <div className='grid grid-cols-2 place items center'>
       <div className='text-center'>
      <h1 className='mt-6 font-bold sm:text-2xl text-blue-700  mb-5 text-md '> Objectives</h1>
      <ul className='text-gray-700 sm:text-md font-medium text-sm'>
<li>Safe and Adequate Blood Supplies</li>
<li>Reduced Turnaround Time</li>
<li>Preventing Wastage of Blood</li>
<li>Restrict Professional Donors</li>
<li>Networking of Blood Banks</li>
<li>Donor Repository</li>
</ul>

       </div>
       <div className='text-center'>
       <h1 className='mt-6 font-bold sm:text-2xl text-blue-700  mb-5 text-md'>Salient Features</h1>
       <ul className='text-gray-700 sm:text-md font-medium text-sm'>
<li>Web Based Application</li>
<li>Aadhar Linkage</li>
<li>Decision Suppport</li>
<li>Enforces Guidelines</li>
<li>Dashboard</li>
<li>Statutory Reports</li>
</ul>
       </div></div>
       <div className='grid grid-cols-1 '>
      <h1 className='mt-6 font-bold sm:text-2xl text-blue-700  mb-5 text-sm'>REFERENCES</h1>
      <h1 className='text-gray-700 sm:text-md font-medium text-xs ml-11' > "THE NEW INDIAN EXPRESS","INDIAN TIMES","BUSINESS INSIDER","CHAT GENERATIVE PRE-TRAINED TRANSFORMER","BLOOD CONNECTION","e-RAKTHAKOSH".</h1>
       </div>
       <div>
        <h1 className='text-end font-bold  sm:text-xl text-gray-500 sm:mr-11 text-md mr-5'>-D.uday venkat</h1>
       </div>
    </div>
  )
}

export default About