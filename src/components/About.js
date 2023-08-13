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
      
      <div className='bg-gray-300 h-[800px] w-full flex flex-col justify-center '>
        <h1 className='font-bold text-center text-5xl my-10'>The Re.Book Mission</h1>
        <div className='flex justify-center items-center space-x-10'>
      <img className='w-14' src="ecology.png" alt="" />
        <img className='w-14' src="recycling-bin.png" alt="" />
        <img className='w-14' src="recycle-symbol-of-three-arrows.png" alt="" />
        </div>
        <div className='flex justify-center'>
        <p className=' block w-96 text-center my-10'>We believe in promoting sustainable practices in the paper industry focusing primarily on the reuse and secondarily on the recycling of books used in institutes.</p>
        </div>
        </div>
      <Fea></Fea>
      </div>
      <div>
        
        </div>
      </div>
     
    
    
        
    </div>
  )
}
