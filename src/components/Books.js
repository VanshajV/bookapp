import React from 'react'
import Navbar from './Navbar'

export default function Books() {
     
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-wrap '>
      <div className='m-5 flex flex-col items-center bg-yellow-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img className="border-2 rounded-md border-black" src="rich.jpeg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>Rich dad poor dad</p>
      </div>
      <div className=" my-2 flex justify-around w-full text-white">
        <button className=' px-2 py-1 rounded-md bg-gray-900'>Add to cart</button>
        <button className=' px-2 py-1 rounded-md bg-gray-900'>Buy</button>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (1).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>MAths rs aggarwal</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (2).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>Charlie and the chocolate factory</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download.jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>Maths rd sharma</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (3).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>three men in a boat</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (4).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>Gulliver's travels</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (5).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>The story of my life</p>
      </div>
    
    </div>
    <div className='m-5 flex flex-col items-center bg-red-900 bg-opacity-50 w-[300px] h-[400px] rounded-md border-2 border-black'>
      <div className='m-4'>
          <div>
            <img classname="border-4 border-black" src="download (6).jpg" alt="" />
         </div>
        
      </div>
      
      <div>
        <p className='text-xl'>Song of ice and fire</p>
      </div>
    
    </div>
    </div>
    
      
    </div>
  )
}
