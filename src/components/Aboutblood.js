import React from 'react'
import img8 from './img8.avif'
import img9 from './img9.jpg'
const Aboutblood = () => {
  return (
    <div>
      <div className='grid grid-cols-1 place-items-center'>
        <div className='flex flex-row '>
      <div>
       <img  className='w-72 scale-75' alt='j' src={img8}/>
      </div>
      <div className='py-11 mt-8' >
      <h1 className='sm:text-3xl text-xl font-extrabold text-red-600'>ALL</h1>
      <h1  className='sm:text-3xl text-xl font-extrabold text-red-600'>ABOUT</h1>
      <h1  className='sm:text-3xl text-xl font-extrabold text-red-600'>BLOOD</h1>
      </div>
      </div>
     </div>
     <hr></hr>
     <div className='grid grid-cols-1 place-items-center font-bold sm:text-lg text-sm text-gray-600 ml-10 mr-10 p-5 mt-5'>
      <h1 className='text-center'>What’s one thing you have in common with everyone you meet? Blood. whether you’re O+ or AB-, everybody has blood, and it plays a critical role in keeping you alive. In fact, blood probably does more for your body than you realize. You know that you need blood, but what does it do inside your body? How is it helping you? And after donating blood, how does your body replenish what you gave? Let’s dive into it!</h1>
    <br></br>
    <h1 className='md:text-2xl text-xl font-extrabold text-red-600 p-5'>What is Blood?</h1>
    <h1>You likely already have a pretty good idea of what blood is, but let’s bolster your understanding with a scientific definition. Blood is a bodily fluid in the circulatory system that travels via blood vessels to transport vital substances through the body and take waste products away from organs and tissues. Blood consists of four distinct parts:
Plasma – the liquid part of the blood
Red blood cells – the cells that carry oxygen from the lungs to the rest of the body
White blood cells – the cells responsible for fighting infections in the body
Platelets – blood cells that clot and control bleeding</h1>
<h1 className='md:text-2xl text-xl font-extrabold text-red-600 p-5' >What Does Blood Do?</h1>
<h1>As mentioned, blood travels through the body to deliver nutrients and remove waste. Your blood vessels function like a complex highway network that weaves through different parts of your body. Blood is the carrier that travels this highway. Deliveries on this blood highway include vital elements such as oxygen, vitamins, hormones, antibodies, heat, and electrolytes.
Not only is blood an effective delivery service for your body, but it is also a reliable waste manager. As it travels through the body, the blood picks up carbon dioxide and other waste products that your body doesn’t need and takes them to the kidneys, lungs, and digestive system to be removed.
</h1>
<h1 className='md:text-2xl text-xl font-extrabold text-red-600 p-5'>How Blood Travels Through the Body</h1>
<h1>Blood travels through the body via blood vessels that comprise the circulatory system, and your heart is responsible for pumping blood through those vessels. Blood leaves the heart through blood vessels called arteries, starting with the aorta. As blood travels through the body, carrying its delivery of essential nutrients and oxygen, it then passes through capillaries, which are thin vessels that connect the arteries and veins. The thin walls of capillaries allow oxygen, nutrients, carbon dioxide, and waste to pass to and from tissues in the body.
From here, veins take deoxygenated blood back to the heart. As veins get closer to the heart, they get bigger in diameter, eventually merging into two primary veins known as the vena cava. The superior vena cava is responsible for bringing blood from the head and arms, and the inferior vena cava carries blood from the abdomen and legs. The system of blood vessels in an adult human body is over 60,000 miles long, enough to wrap around the earth twice!</h1>
   <h1  className='md:text-2xl text-xl font-extrabold text-red-600 p-5'>How the Body Cleans Blood?</h1>  
   <h1 className='mb-11'> To rid itself of the waste it gathers throughout the body, blood must be cleaned. The three major organs that contribute to the cleansing process are the liver, lungs, and kidneys. The liver filters toxins and unwanted byproducts and extracts nutrients to be passed on to the rest of the body. Lungs remove unwanted gasses (carbon dioxide) and release them through breath. Finally, kidneys filter waste and byproducts that are then removed through the urinary system.</h1>
     </div>
     <div className='grid grid-cols-1 place-items-center'>
     <img  className='w-96' alt='ss' src={img9}/>
     </div>
    </div>
  )
}

export default Aboutblood