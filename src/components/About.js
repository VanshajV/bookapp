import React from 'react'
import Fea from './Fea'
import Navbar from './Navbar'
export default function About() {
  return (
    <div>
     <Navbar></Navbar>
     
      <div className='bg-gray-200 mx-2 my-1 rounded-md '>
     
      
      <div id="bg2" className='flex flex-wrap justify-center bg-cover gap-3 items-center overflow-auto h-[750px] '>
      <div  className='h-[750px]  mb-10'>
        <div id="about" className=' flex  flex-col ml-24 mt-52 w-[1000px]  text-white mr-32'>
        <p className='text-5xl '> It is estimated that by 2020, paper mills will be producing 500,000,000 tons of paper and paperboard each year.</p>
        <p className='mt-5 text-2xl'>We obviously need this product and a reduction of use is not on the horizon.</p>
        </div>
        
        

      </div>
      <div className='bg-gray-300 h-96 w-full flex justify-center items-center'>
      <img className='w-28' src="image-removebg-preview (1) (2).png" alt="" />
        <img className='w-28' src="image-removebg-preview (2) (1).png" alt="" />
        <img className='w-28' src="image-removebg-preview (3) (2).png" alt="" />
          
        </div>
      <Fea></Fea>
      </div>
      <div>
        
        </div>
      </div>
     
    
    
        
    </div>
  )
}
