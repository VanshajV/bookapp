import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    <div>
      <Navbar></Navbar>
   
    <div id="bg" className='h-[740px] bg-cover bg-no-repeat  rounded-md bg-center mx-2 flex  justify-center  items-center  '>
      <div className='flex flex-col items-center bg-opacity-30 rounded-xl p-5 '>
      <div className='my-4 ml-3'>
      <img className='w-96' src="logo (2).png" alt="" />
      </div>
      <div className=" text-white ">
        <p className='text-4xl font-extrabold'>"Waste isn't waste until we waste it."</p>
        
      </div>
      <Link to="/Books" className=' text-white m-2 text-xl bg-red-800 rounded-lg px-2 py-2 font-bold'>Explore More!</Link>
      </div>
      
   




    </div>
  
    </div>
  )
}
